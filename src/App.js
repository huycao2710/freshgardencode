import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { AnimatePresence, motion } from 'framer-motion';
import * as UserAllService from './services/UserAllService';
import { resetUser, updateUser } from './redux/slides/userAllSlide';
import { isJsonString } from './util';
import { routes } from './routes';
import Loading from './components/global/LoadingComponent/LoadingComponent';
import DefaultComponent from './components/global/DefaultComponent/DefaultComponent';

const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const initialize = async () => {
      setIsPending(true)
      const { storageData, decoded } = handleDecoded();
      if (decoded?.id) {
        await handleGetDetailsUser(decoded?.id, storageData);
      }
    };
    setIsPending(false)
    initialize();
  }, []);

  const handleDecoded = () => {
    let storageData = user?.access_token || localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }

  UserAllService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date();
    const { decoded } = handleDecoded();
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const decodedRefreshToken = jwtDecode(refreshToken)
    if (decoded?.exp < currentTime.getTime() / 1000) {
      if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
        const data = await UserAllService.refreshToken(refreshToken)
        config.headers['token'] = `Bearer ${data?.access_token}`
      } else {
        dispatch(resetUser())
      }
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  const handleGetDetailsUser = async (id, token) => {
    try {
      let storageRefreshToken = localStorage.getItem('refresh_token')
      const refreshToken = JSON.parse(storageRefreshToken)
      const res = await UserAllService.getDetailsInfoUser(id, token);
      console.log('User details response:', res);
      dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken }));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes >
          {routes.map((route) => {
            const Page = route.page;
            const ischeckAuth = !route.isPrivate || user.isAdmin;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;

            return (
              ischeckAuth && (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={fadeTransition}
                      transition={{ duration: 0.5 }}
                    >
                      <Layout>
                        <Page />
                      </Layout>
                    </motion.div>
                  }
                />
              )
            );
          })}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

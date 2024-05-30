import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { AnimatePresence, motion } from 'framer-motion';
import * as UserAllService from './services/UserAllService';
import { updateUser } from './redux/slides/userAllSlide';
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
  const [isPending, setIsPending] = useState(false);
  const user = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    setIsPending(true);
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
    setIsPending(false);
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  UserAllService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date();
    const { decoded } = handleDecoded();
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserAllService.refreshToken();
      config.headers['token'] = `Bearer ${data?.access_token}`;
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token');
    const refreshToken = JSON.parse(storageRefreshToken);
    const res = await UserAllService.getDetailsInfoUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken }));
  };

  return (
    <div>
      <Loading isPending={isPending}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            {routes.map((route) => {
              const Page = route.page;
              const Layout = route.isShowHeader ? DefaultComponent : Fragment;

              return (
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
              );
            })}
          </Routes>
        </AnimatePresence>
      </Loading>
    </div>
  );
};

export default App;

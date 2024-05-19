import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { routes } from './routes';

const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        {routes.map((route) => {
          const Page = route.page;

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
                  <Page />
                </motion.div>
              }
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

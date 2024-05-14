import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;

            return (
              <Route key={route.path} path={route.path} element={
                <Page />
              } />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
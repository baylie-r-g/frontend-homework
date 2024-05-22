import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '/elements/HomePage';
import CountryList from '/elements/CountryList';
import Population from '/elements/Population';
import Chart from '/elements/Chart';

// import { createRoot } from 'react-dom/client';
//import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/list',
    element: <CountryList />,
  },
  {
    path: '/population',
    element: <Population />,
  },
  {
    path: '/chart',
    element: <Chart />,
  },
]);

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import NavigationLayout from './components/NavigationLayout';
import SearchBarRequest from './components/searchBarRequest';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <h1>Login</h1>,
  },
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <SearchBarRequest />,
      },
      {
        path: '/movies',
        element: <h1>hellou movies</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import NavigationLayout from './components/NavigationLayout';
import GenresSelectionPage from './components/genre/genres_selection/GenresSelection';
import GenreFavorites from './components/genre/GenreFavorites';
import MovieDetailHeader from './components/MovieDetailHeader';

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
        element: <GenreFavorites />,
      },
      {
        path: '/movies',
        element: (
          <div>
            <MovieDetailHeader goBackTo="/" svg={true}>
              Movie
            </MovieDetailHeader>
            <MovieDetailHeader goBackTo="/">Movie</MovieDetailHeader>
          </div>
        ),
      },
    ],
  },

  {
    path: '/genres',
    element: <GenresSelectionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

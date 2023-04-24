import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import react-query components
import './index.css';
import WelcomeHeader from './components/WelcomeHeader';
import NavigationLayout from './components/NavigationLayout';
import MovieDetails from './pages/MovieDetails';
import BookDateAndTime from './pages/BookDateAndTime';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Credits from './pages/Credits';
import SearchBar from './components/Searchbar';
import LogInPage from './pages/LogInPage';

const queryClient = new QueryClient(); // Create an instance of QueryClient

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogInPage />,
  },
  {
    path: '/genres',
    element: <Genres />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
  },
  {
    path: '/credits/:id',
    element: <Credits />,
  },
  {
    path: '/dates',
    element: <BookDateAndTime />,
  },
  {
    path: '/seats',
    element: <h1>SELECT SEATS</h1>,
  },
  {
    path: '/success',
    element: <h1>BOOKING SUCCESSFULL</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ErrorPage from './Error/Error.jsx';
import Products from './products/products.jsx';
import '@fontsource/inter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/products',
      element: <Products />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ],
  {
    basename: '/cuyber-Shop',
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
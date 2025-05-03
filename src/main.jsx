import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "tailwindcss";
import App from './App.jsx';
import ErrorPage from './Error/Error.jsx';
import Products from './products/products.jsx';
import Filter from './products/filterMobile.jsx';
import Layout from './components/layout.jsx';
import Cart from './cart/cart.jsx';
import Detail from './Detail/Detail.jsx';
import LogIn from './LogIn/Login.jsx';
import Signup from './Signup/Signup.jsx';

import '@fontsource/inter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <App />,
          errorElement: <ErrorPage />,
        },

        {
          path: '/products',
          element: <Products />,
          errorElement: <ErrorPage />,
        },

        {
          path: '/filter',
          element: <Filter />,
          errorElement: <ErrorPage />,
        },

        {
          path: '/cart',
          element: <Cart />,
          errorElement: <ErrorPage />,
        },

        {
          path: '/detail/:id',
          element: <Detail />,
          errorElement: <ErrorPage />,
        },

        {
          path :'/LogIn',
          element:<LogIn />,
          errorElement:<ErrorPage/>
          
        },

        {
          path :'/signup',
          element:<Signup />,
          errorElement:<ErrorPage/>
          
        },

        
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import { Root } from './routes/root';

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router =createBrowserRouter([

  {
    path: "/",
    element: <Root />,

  children: [

  {
    path: "/",
    element: <ProductListing />,
  },

  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
  ],
  }

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

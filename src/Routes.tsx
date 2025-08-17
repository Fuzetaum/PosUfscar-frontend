import axios from 'axios';
import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';

import { Layout } from './layout';

import { NewProduct } from './pages/NewProduct';
import { ProductList } from './pages/ProductList';

const API_URL = 'http://localhost:3001/api/product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'products',
        element: <ProductList />,
        loader: async () => {
          try {
            const response = await axios.get(API_URL);
            return (response.data as any[]).map(product => ({
              ...product,
              code: product.id,
              photo: product.pictureUrl,
            }));
          }
          catch (error) {
            console.log(error);
            alert(error);
          }
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          try {
            return await axios.post(API_URL, {
              name: formData.get('name'),
              description: formData.get('description'),
              price: formData.get('price'),
              category: formData.get('category'),
              pictureUrl: formData.get('photo'),
            });
          }
          catch (error) {
            console.log(error);
            alert(error);
          }
        },
      },
      {
        path: 'new-product',
        element: <NewProduct />
      },
    ],
  }
]);

export const Routes : React.FC = () => <RouterProvider router={router} />;
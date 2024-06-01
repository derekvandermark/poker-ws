import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/root';
import './index.css';
import Create from './routes/create/create';
import Join from './routes/join/join';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
  },
  {
    path: 'create',
    element: <Create />
  },
  {
    path: 'join',
    element: <Join />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

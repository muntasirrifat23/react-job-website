import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Component/Home';
import Applied from './Component/Applied';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      { 
        path:'/applied',
        element: <Applied></Applied>
      },
      { 
        path:'/blog',
        element: <Blog></Blog>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

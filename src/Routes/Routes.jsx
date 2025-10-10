import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppList from '../Pages/AppList/AppList'
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
    {
      path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                index: true,
                path:"/",
                Component: Home,
                loader:()=>fetch('Data1.json'),
            },
            {
                path: '/AppList',
                loader:()=>fetch('Data2.json'),
                Component:AppList
            },
            {
                path: '/Installation',
                // loader:()=>fetch('booksData.json'),
                Component:Installation
            },
           {
                path: "/AppDetails/:id",
                element: <AppDetails />
            }


      ]
    },
]);
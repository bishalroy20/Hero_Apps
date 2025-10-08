import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppList from '../Pages/AppList/AppList'
import Installation from '../Pages/Installation/Installation';

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
                // loader:()=>fetch('booksData.json'),
            },
            {
                path: '/AppList',
                Component:AppList
            },
            {
                path: 'Installation',
                // loader:()=>fetch('booksData.json'),
                Component:Installation
            },
            // {
            //     path: '/bookDetails/:id',
            //     loader:()=>fetch('./booksData.json'),
            //     Component:BookDetails
            // }
      ]
    },
]);
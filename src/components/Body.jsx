import React from 'react';
import Header from './Header';
import Login from './login';
import Browse from './Browse';
import SignUp from './SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "signup",
            element: <SignUp/>
        },
        {
            path: "/browser",
            element: <Browse/>
        }
    ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

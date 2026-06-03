import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";
import Home from "../../features/dashboard/ui/pages/Home";
import DashBoardLayout from "../layouts/DashBoardLayout";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/AuthAction";
import PublicRoute from "../Protected/PublicRoute";
import ProtecteRoute from "../Protected/ProtecteRoute";
import RoleBaseRoute from "../Protected/RoleBaseRoute";
import { commonRoutes } from "./commonRoutes";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

const AuthRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee());
    })();
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <ProtecteRoute />,
      children: [
        {
          
          element: <DashBoardLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RoleBaseRoute allowedRoles={"admin"} />,
              children: adminRoutes,
            },
            {
              element: <RoleBaseRoute allowedRoles={"employee"} />,
              children: employeeRoutes,
            },

        
      ],

    },
],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AuthRoutes;

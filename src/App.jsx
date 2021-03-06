import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { SecureRoutes } from "./containers/SecureRoutes";
import {
  Login,
  Register,
  AddProduct,
  EditProduct,
  ProductsList,
  UserProducts,
} from "./components";
import { Background, Credits } from "./components/styledComponents/main";

export const App = () => {
  return (
    <AuthProvider>
      <Background>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user-products"
            element={
              <SecureRoutes>
                <UserProducts />
              </SecureRoutes>
            }
          />
          <Route
            path="/user-products/add"
            element={
              <SecureRoutes>
                <AddProduct />
              </SecureRoutes>
            }
          />
          <Route
            path="/user-products/list"
            element={
              <SecureRoutes>
                <ProductsList />
              </SecureRoutes>
            }
          />
          <Route
            path="/user-products/list/:id"
            element={
              <SecureRoutes>
                <EditProduct />
              </SecureRoutes>
            }
          />
        </Routes>
        <Credits>
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/mirkoperamas/"
            target="_blank"
            rel="noreferrer"
          >
            Mirko Peramas
          </a>{" "}
          | MPeardev &copy; 2022
        </Credits>
      </Background>
    </AuthProvider>
  );
};

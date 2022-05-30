import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { SecureRoutes } from "./containers/SecureRoutes";
import { Login } from "./components/Login/Login";
import { UserProducts } from "./components/UserProducts/UserProducts";
import { Register } from "./components/Register/Register";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Credits = styled.p`
  position: absolute;
  bottom: 2%;
  color: #00000051;
  font-size: 13px;
  & a {
    cursor: pointer;
    text-decoration: none;
    color: #00000095;
  }
`;

export const App = () => {
  return (
    <AuthProvider>
      <Background>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user-products"
            element={
              <SecureRoutes>
                <UserProducts />
              </SecureRoutes>
            }
          />
        </Routes>
        <Credits>
          Designed by{" "}
          <a href="https://www.linkedin.com/in/mirkoperamas/" target="_blank">
            Mirko Peramas
          </a>{" "}
          | MPeardev &copy; 2022
        </Credits>
      </Background>
    </AuthProvider>
  );
};

import React from "react";
import { useAuth } from "../context/authContext";
import {
  PrimaryButton,
  ButtonsBox,
  DangerButton,
} from "./styledComponents/buttons";
import {
  MainContainer,
  TextRegister,
  TextAction,
} from "./styledComponents/containers/SecondaryView";
import "../styles/main.css";

import { Link } from "react-router-dom";

export const UserProducts = () => {
  const { user, userLogout } = useAuth();

  const handleLogout = () => {
    userLogout();
  };

  const userEmail = user.email;

  return (
    <>
      <MainContainer>
        <div>
          {user && (
            <>
              <TextRegister>
                You are registered with the following email:{" "}
                <strong>{userEmail}</strong>
              </TextRegister>
              <hr />
              <TextAction>What do you want to do? ...</TextAction>
              <ButtonsBox>
                <Link to={"/user-products/add"}>
                  <PrimaryButton>Register new product</PrimaryButton>
                </Link>
                <Link to={"/user-products/list"}>
                  <PrimaryButton>List products</PrimaryButton>
                </Link>
                <DangerButton onClick={handleLogout}>Sign Off</DangerButton>
              </ButtonsBox>
            </>
          )}
        </div>
      </MainContainer>
    </>
  );
};

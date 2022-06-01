import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../../styles/main.css";
import { PrimaryButton, SecondaryButton } from "../styledComponents/buttons";
import {
  Message,
  MobileViewAjust,
  PrimaryView,
  Subtitle,
  Title,
} from "../styledComponents/containers/PrimaryView";

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { userLogin, loginWithGoogle } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(user.email, user.password);
  };

  const handleGoogleSignin = () => {
    loginWithGoogle();
  };

  return (
    <>
      <PrimaryView>
        <Title>Tech Products</Title>
        <MobileViewAjust>
          <Subtitle>
            <hr />
            <h3>Sign in</h3>
            <hr />
          </Subtitle>
          <SecondaryButton onClick={handleGoogleSignin}>
            Continue with google
          </SecondaryButton>
        </MobileViewAjust>
        <Subtitle>
          <hr />
          <h3>or use email</h3>
          <hr />
        </Subtitle>

        <form onSubmit={handleSubmit} className="formStyle">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="inputStyle"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="inputStyle"
          />

          <PrimaryButton>Sign in</PrimaryButton>
        </form>
        <Message>
          <p>
            Don't have an account?
            <strong onClick={() => navigate("/register")}> Sign Up</strong>
          </p>
        </Message>
      </PrimaryView>
    </>
  );
};

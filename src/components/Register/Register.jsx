import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../../styles/main.css";
import { PrimaryButton } from "../styledComponents/buttons";
import {
  Message,
  PrimaryView,
  Title,
} from "../styledComponents/containers/PrimaryView";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { userSignup } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userSignup(user.email, user.password);
  };

  return (
    <>
      <PrimaryView>
        <Title>Tech Products</Title>
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

          <PrimaryButton>Sign up</PrimaryButton>
        </form>
        <Message>
          <p>
            Do you already have an account?
            <strong onClick={() => navigate("/")}> Sign in</strong>
          </p>
        </Message>
      </PrimaryView>
    </>
  );
};

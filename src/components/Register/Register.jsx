import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {
  CardContainer,
  Title,
  Message,
  FormButton,
} from "../../containers/CardContainer";

import "../../styles/main.css";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };

  return (
    <>
      <CardContainer>
        <Title>Products</Title>
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

          <FormButton>Sign up</FormButton>
        </form>
        <Message>
          <p>
            Do you already have an account?
            <strong onClick={() => navigate("/")}> Sign in</strong>
          </p>
        </Message>
      </CardContainer>
    </>
  );
};

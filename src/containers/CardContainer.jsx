import React from "react";
import styled from "styled-components";

const FormContent = styled.main`
  width: 100%;
  overflow: hidden;
  max-width: 20rem;
  margin: 0 auto;
  padding: 1rem 0;
  background: #fcfcfc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  & hr {
    width: 100%;
  }
  & h3 {
    width: 100%;
    font-size: 13px;
    text-align: center;
    margin: 2rem 0rem;
  }
`;

export const Message = styled.div`
  margin: 0.5rem 0 0 0;
  & p {
    font-size: 10px;
    text-align: center;
  }
  & strong {
    color: #0791a0;
    cursor: pointer;
  }
`;

export const GoogleButton = styled.button`
  outline: none;
  background: linear-gradient(145deg, #ec4336, #c7392d);
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px #000;
  padding: 0.5rem 1rem;
  border: 0;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
`;
export const FormButton = styled.button`
  outline: none;
  background: linear-gradient(145deg, #079bab, #068390);
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px #000;
  padding: 0.5rem 1rem;
  border: 0;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
`;

export const CardContainer = ({ children }) => {
  return (
    <>
      <FormContent>
        <Main>{children}</Main>
      </FormContent>
    </>
  );
};

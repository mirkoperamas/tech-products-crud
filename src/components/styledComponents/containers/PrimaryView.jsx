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

const Ajust = styled.div`
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
    color: #00000071;
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
export const MobileViewAjust = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const PrimaryView = ({ children }) => {
  return (
    <FormContent>
      <Ajust>{children}</Ajust>
    </FormContent>
  );
};

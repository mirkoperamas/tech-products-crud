import React from "react";
import styled from "styled-components";

const UProductsContent = styled.main`
  width: 100%;
  height: 70vh;
  margin: 0 2%;
  padding: 1rem 0;
  background: #fcfcfc;
  border-radius: 10px;
  overflow-y: hidden;
  overflow-x: hidden;
  /* box-sizing: border-box; */
  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  & > div {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 0 1.5rem;
  }
  @media (min-width: 1000px) {
    margin: 0 auto;
    max-width: 50rem;
  }
`;

const Main = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    max-width: 40rem;
    margin: 0 auto;
  }
`;

export const NoFiles = styled.h2`
  margin: 5rem auto;
  text-align: center;
  color: #0000006b;
`;

export const TextRegister = styled.p`
  font-size: 20px;
  & strong {
    color: #0791a0;
    text-shadow: 1px 1px 1px #000;
  }
`;

export const TextAction = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & button {
    margin-bottom: 0.5rem;
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
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black !important;
`;

export const TitleProductsList = styled.div`
  display: flex;
  align-items: center;
  & hr {
    width: 100%;
  }
  & h3 {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin: 2rem 0rem;
    color: #0791a0;
  }
`;

export const ProductContent = styled.div`
  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
  border-radius: 5px;
  padding: 2% 0 2% 10%;
  @media (min-width: 1000px) {
    padding: 2% 2% 2% 15%;
  }

  & > div {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    /* border: 1px solid red; */
    & > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid brown; */
    }
  }
`;

export const ProductInfo = styled.div`
  flex-direction: column;
  & span {
    font-size: 12px;
    display: flex;
    @media (min-width: 1000px) {
      font-size: 15px;
      padding: 0.5rem 0;
    }
    width: 100%;
    & strong {
      color: #0791a0;
    }

    & p {
      margin-left: 0.4rem;
      @media (min-width: 1000px) {
      }
    }
  }
  & p {
    margin: 0;
  }
`;

export const ProductImage = styled.div`
  width: 6rem;
  max-height: 7rem;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: 1000px) {
    width: 12rem;
    max-height: 11rem;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonsModifyDataBox = styled.div`
  margin: 0.5rem 0;
  display: flex !important;

  & > div {
    width: 2.5rem !important;
    height: 2.5rem !important;
    border-radius: 50%;
    background: linear-gradient(145deg, #ffffff, #e3e3e3);
    box-shadow: 20px 20px 60px #d6d6d6, -20px -20px 60px #ffffff;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;

    & > div {
      margin: 0 auto;
    }

    &:hover {
      background: linear-gradient(145deg, #e3e3e3, #ffffff);
      box-shadow: 20px 20px 60px #d6d6d6, -20px -20px 60px #ffffff;
    }
  }
`;

export const TitleAddProduct = styled.div`
  display: flex;
  align-items: center;
  & hr {
    width: 100%;
  }
  & h3 {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin: 2rem 0rem;
    color: #0791a0;
  }
`;

export const InputAddBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2rem;

  & label {
    margin-bottom: 0.3rem;
    font-size: 10px;
  }
`;

export const MainContainer = ({ children }) => {
  return (
    <>
      <UProductsContent>
        <div>
          <Main>{children}</Main>
        </div>
      </UProductsContent>
    </>
  );
};

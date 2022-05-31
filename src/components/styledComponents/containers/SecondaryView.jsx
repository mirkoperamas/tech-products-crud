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

const Ajust = styled.div`
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

export const ProductCard = styled.div`
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
    & > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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

export const TitleSubLinks = styled.div`
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

export const InputBox = styled.div`
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
          <Ajust>{children}</Ajust>
        </div>
      </UProductsContent>
    </>
  );
};

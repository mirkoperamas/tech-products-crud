import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 100%;
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
export const SecondaryButton = styled.button`
  width: 100%;
  outline: none;
  background: black;
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
export const DangerButton = styled.button`
  width: 100%;
  outline: none;
  background: linear-gradient(145deg, #ec4336, #c7392d) !important;
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

export const ListButtons = styled.div`
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

export const ButtonsBox = styled.div`
  & button {
    margin-bottom: 0.5rem;
  }
`;

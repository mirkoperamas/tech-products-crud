import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 30rem;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Credits = styled.p`
  position: relative;
  margin-top: 20px;
  color: #00000051;
  font-size: 13px;
  & a {
    cursor: pointer;
    text-decoration: none;
    color: #00000095;
  }
  @media (min-height: 530px) {
    position: absolute;
    bottom: 2%;
  }
`;

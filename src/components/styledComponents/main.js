import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Credits = styled.p`
  position: absolute;
  bottom: 2%;
  color: #00000051;
  font-size: 13px;
  & a {
    cursor: pointer;
    text-decoration: none;
    color: #00000095;
  }
`;

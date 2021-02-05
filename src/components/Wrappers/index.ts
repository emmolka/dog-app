import styled from "styled-components";

export const FullPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: #e2e5de;
`;

export const ApplicationWrapper = styled.div`
  height: 100%;
  border-radius: 50px;
  max-height: 600px;
  width: 100%;
  max-width: 400px;
  background-color: #b2beb5;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ElementsWrapper = styled.div`
  height: 60%;
  width: 100%;
  background-color: #b2beb5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 100;
  flex: 1.3;
  overflow: visible;
  flex-direction: column;
  padding: 20px;

  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    height: 50px;
    background-color: #b2beb5;
    width: 100%;
    border-radius: 30%;
  }
`;

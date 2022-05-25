import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.div`
  border: 1px solid;
  border-radius: 5px;
  box-shadow: inset 0px 2px 7px 2px red;
  width: 75%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-content: center; */
  margin: 10px auto;
  padding: 10px;
  justify-content: center;
`;
export const CloseBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  color: #ffffff !important;
  position: absolute;
  top: 20px;
  right: 20px;
  transform: scale(1.6);
  z-index: 100;
  cursor: pointer;
`;

export const Section = styled.section`
  z-index: 11;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: fixed;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    opacity: 0.7;
  }
`;

export const Post = styled.div`
  position: fixed;

  top: 15vh;

  border-radius: 15px;
  margin: 0 auto;
  z-index: 30;
  height: 50vh;

  width: 32%;
  background: white;
  overflow: hidden;
`;

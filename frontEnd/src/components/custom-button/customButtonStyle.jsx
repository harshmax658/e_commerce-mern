import styled, { css } from "styled-components";

const googleColor = "#4285f4";

const googleSiginIn = css`
  background-color: ${googleColor};
  color: white !important;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogleSignIn) {
    return googleSiginIn;
  }

  if (props.inverted) {
    return inverted;
  }
};
export const CustomButtonStyle = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0px 30px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${getButtonStyle}
`;

import styled from "styled-components";

export const Main = styled.div`
  height: 100%;
`;
export const Header = styled.div`
  width: 100%;
  background-color: black;
  height: 70px;
`;
export const Center = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;
export const Left = styled.div`
  width: 20%;

  height: 100%;

  padding: 0 30px;
  color: white;
  z-index: 11;

  &::before {
    content: "";
    z-index: -11;
    background-color: black;
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    height: 100%;
    width: 20%;
  }

  ul {
    list-style: none;

    li {
      margin: 5px 0;
      padding: 10px;
      font-size: 1.3rem;
      background-color: black;
      p {
        cursor: pointer;
      }
    }
  }
`;
export const Right = styled.div`
  width: 80%;
  height: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    /* border: 2px solid; */
    display: flex;

    .form-group {
      /* display: flex; */
      width: 100%;
    }
  }
  input[type="file"] {
    display: none;
  }
`;

export const Form = styled.div`
  width: 50%;
`;
export const Inline2 = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  button {
    width: 50%;
  }
  label {
    width: 50%;
    height: 50px;
    background-color: #637de3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
  }
`;
export const Inline = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;

  input,
  select {
    width: 80%;
  }
  label {
    width: 30%;
  }
`;

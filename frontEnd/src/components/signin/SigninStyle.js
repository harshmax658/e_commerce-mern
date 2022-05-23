import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }

  .title {
    margin: 30px 0;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

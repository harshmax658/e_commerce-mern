import styled from "styled-components";

export const CheckOutPageStyle = styled.div`
  /* width: 55%; */
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen (min-width: 670px) and (max-width: 800px) {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: none;
  }
  @media (min-width: 586px) and (max-width: 670px) {
    width: 70%;
  }
  @media (max-width: 585px) {
    width: 70%;
    // margin: 0;
  }
`;
export const CheckOutHeaderStyle = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;

  @media (max-width: 585px) {
    display: none;
  }
`;
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 9%;
  }
`;

export const CardDemo = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 1rem;
  color: red;
`;
export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-right: 20px;
    margin-top: 10px;
  }
`;

import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const CollectionItemConatiner = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  justify-content: center;
  margin: 0 4px;
  margin-bottom: 15px;

  &:hover {
    opacity: 0.8;

    button {
      display: flex;
      opacity: 0.95;
      // justify-content: center;
    }
  }
`;
export const ImageStyle = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  width: 100%;
  height: 95%;
  background-size: cover;
  margin-bottom: 5px;
`;
export const CollectionFooterStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  height: 5%;
`;
export const NameStyle = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;
export const CustomButtonStyle = styled(CustomButton)`
  position: absolute;
  opacity: 0.7;
  top: 255px;
  display: none;
  text-align: center;
  width: 80%;
  font-size: 16px;
  padding: 0px 15px;
`;

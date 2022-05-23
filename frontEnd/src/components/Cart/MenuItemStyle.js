import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "299px" : "242px")};
  min-width: 30%;

  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .backgroundImage {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: #ffffff;
  opacity: 0.7;
  text-transform: uppercase;
  position: absolute;
  @media screen and (max-width: 800px) {
    height: 70px;
    margin-top: 5rem;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
`;

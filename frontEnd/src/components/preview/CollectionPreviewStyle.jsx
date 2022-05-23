import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyle = styled(Link)`
  text-decoration: none;

  color: #5f5e5e;
  &:hover {
    // transform: scale(1.1);
    font-size: 2rem;
    opacity: 0.5;
    transition: 0.31s ease-out;
  }
  &:focus {
    color: blue;
  }
`;
export const CollectionPreviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Title = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
  @media screen and (max-width: 690px) {
    font-size: 29px !important;
    margin-left: 3rem;
  }
`;
export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 490px) and (max-width: 690px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 16px;
    margin-bottom: 5px;
  }
  @media (max-width: 490px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    margin: 0 16px;
    margin-bottom: 5px;
  }
`;

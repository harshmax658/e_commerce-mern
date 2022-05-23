import styled from "styled-components";

export const CollectionPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;
export const Title = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;

  & .collection_item {
    margin-bottom: 20px;
  }
  @media (min-width: 555px) and (max-width: 670px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 555px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    padding: 0 10px;
  }
`;

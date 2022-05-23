import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import "./collectionPreview.scss";
import "./collectionPreview.css";
import { useRouteMatch } from "react-router-dom";
import {
  LinkStyle,
  CollectionPreviewStyle,
  Title,
  Preview,
} from "./CollectionPreviewStyle";

const CollectionPreview = ({ items, title }) => {
  const path = useRouteMatch();

  return (
    <>
      <CollectionPreviewStyle>
        <Title>
          <LinkStyle to={`${title.toLowerCase()}`}>
            {title.toUpperCase()}
          </LinkStyle>
        </Title>
        <Preview>
          {items
            .filter((item, index) => index < 4)
            .map((item) => {
              return <CollectionItem key={item._id} item={item} />;
            })}
        </Preview>
      </CollectionPreviewStyle>
    </>
  );
};

export default CollectionPreview;

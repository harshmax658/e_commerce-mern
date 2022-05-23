import React, { useEffect } from "react";

import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";

import { fetchCollectionStart } from "../../redux/shop/action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <>
      <Route exact path={match.path} component={CollectionOverview} />
    </>
  );
};

export default Shop;

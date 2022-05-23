import React, { useEffect } from "react";
import CollectionPreview from "../../components/preview/CollectionPreview";
import "./collectionOverView.scss";

import { useDispatch, useSelector } from "react-redux";
import ShopCollectionSelector from "../../redux/shop/ShopCollectionSelector";

import Spinner from "../spinner/Spinner";
import { Center } from ".././CenterStyle";
import { fetchCollectionSucess } from "../../redux/shop/action";

const CollectionOverview = () => {
  const shoppingData = useSelector((state) => state.shopReducer);
  const { collection, isLoading } = shoppingData;
  const dispatch = useDispatch();

  const date = new Date().toLocaleTimeString();
  let newData = ShopCollectionSelector(collection);

  let obj = {};
  useEffect(() => {
    const collection = ["hats", "womens", "sneakers", "jackets", "mens"];
    collection.forEach(async (data) => {
      const call = await fetch(`/api/product/${data}`);
      const callData = await call.json();
      obj = { ...obj, [data]: { title: data, items: callData.data } };
      let size = Object.keys(obj).length;
      if (size === 5) dispatch(fetchCollectionSucess(obj));
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <div className="collection_overview">
          {newData.map(({ id, ...collection }) => {
            console.log(newData);
            return <CollectionPreview key={id + date} {...collection} />;
          })}
        </div>
      )}
    </>
  );
};

export default CollectionOverview;

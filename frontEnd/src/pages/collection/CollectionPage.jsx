import React, { useEffect, useState } from "react";
// import "./collectionPage.scss";
// import "./collectionPage.css";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { Center } from "../../components/CenterStyle";
import { CollectionPageStyle, Title, Items } from "./CollectionPageStyle";
const CollectionPage = () => {
  const { categoryName } = useParams();
  const [callCollection, setCallCollection] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const shoppingData = useSelector((state) => state.shopReducer);

  const { collection } = shoppingData;

  if (collection) {
    // callCollection = collection[categoryName];
  }
  useEffect(() => {
    const fetchCollection = async () => {
      const call = await fetch(`/api/product/${categoryName}`);
      if (call.status === 200) {
        const jsonData = await call.json();
        console.log(jsonData);
        setCallCollection(jsonData.data);
        if (jsonData.data.length === 0) setError(true);
        setIsLoading(false);
      }
      console.log(callCollection);
    };
    fetchCollection();
  }, []);

  return (
    <>
      {error && <h1>Error</h1>}
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <CollectionPageStyle>
          <Title>{callCollection.title}</Title>
          <Items>
            {callCollection.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </Items>
        </CollectionPageStyle>
      )}
    </>
  );
};

export default CollectionPage;

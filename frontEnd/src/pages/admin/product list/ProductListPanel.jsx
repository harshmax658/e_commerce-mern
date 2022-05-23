import React, { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";

import { Grid } from "./productListStyle";

const ProductListPanel = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const callData = async () => {
      const call = await fetch("api/product/get-product");
      const dataJson = await call.json();
      if (call.status === 200) {
        setList(dataJson.data);
      }
    };
    callData();
  }, []);

  const removeProduct = async (id) => {
    const confirm = window.confirm("you want to delete this");

    if (confirm) {
      const call = await fetch(`api/product/delete/${id}`);
      const dataJson = await call.json();
      if (call.status === 200) {
        // setList(dataJson.data);
        const newList = list.filter((data) => data._id !== id);
        setList(newList);
      }
    }
  };
  return (
    <Grid>
      {list.map((data, key) => {
        return <Card removeProduct={removeProduct} data={data} key={key} />;
      })}
    </Grid>
  );
};

export default ProductListPanel;

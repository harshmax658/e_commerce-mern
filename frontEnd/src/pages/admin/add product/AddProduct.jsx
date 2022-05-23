import React, { useState } from "react";
import { Form, Inline, Inline2 } from "./product";
import CustomButton from "../../../components/custom-button/CustomButton";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "Hats",
    price: "",
  });

  const [file, setFile] = useState(null);
  const { name, category, price } = product;

  const formHandler = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sendPostData = async (e) => {
    e.preventDefault();
    if (file && name && category && price) {
      const data = new FormData();
      data.append("image", file);
      data.append("name", name);
      data.append("category", category);
      data.append("price", price);

      const fetchReq = await fetch("api/product/create", {
        method: "POST",

        body: data,
      });

      if (fetchReq.status === 200) {
        const fetchReqJson = await fetchReq.json();
        alert("data add");
        setProduct((prev) => {
          return { ...prev, name: "", category: "Hats", price: "" };
        });
        setFile(null);
      } else {
        console.log(fetchReq);
      }
    } else {
      alert("fill all data");
    }
  };
  return (
    <Form>
      <form onSubmit={sendPostData}>
        <div class="form-group">
          <Inline>
            <label for="exampleInputPassword1">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Product Name"
              name="name"
              value={name}
              onChange={formHandler}
            />
          </Inline>
          <Inline>
            <label for="exampleFormControlSelect1">Category</label>
            <select
              class="form-control"
              value={category}
              name="category"
              onChange={formHandler}
              id="exampleFormControlSelect1"
            >
              <option>Hats</option>
              <option>Jackets</option>
              <option>Sneakers</option>
              <option>Womens</option>
              <option>Mens</option>
            </select>
          </Inline>
          <Inline>
            <label for="exampleInputPassword1">Enter Price</label>
            <input
              value={price}
              onChange={formHandler}
              name="price"
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Price"
            />
          </Inline>

          <Inline2>
            <label for="exampleFormControlFile1">Add product image</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setFile(e.target.files[0])}
              class="form-control-file"
              id="exampleFormControlFile1"
            />
            <CustomButton>Upload</CustomButton>
          </Inline2>
        </div>
      </form>
    </Form>
  );
};

export default AddProduct;

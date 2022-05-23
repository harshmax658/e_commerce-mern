import React from "react";

const Card = ({ data, removeProduct }) => {
  const { image, name, price, _id } = data;

  return (
    <div className="flexbox">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={`uploads/images/${image}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div
            className="inline"
            style={{ display: "flex", "justify-content": "space-between" }}
          >
            <h4>₹{price}</h4>
            <span>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => removeProduct(_id)}
              >
                Remove
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

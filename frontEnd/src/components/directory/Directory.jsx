import React from "react";
import MenuItem from "../Cart/MenuItem";
import "./directory.scss";
import "./directory.css";

import { useSelector } from "react-redux";

const Directory = () => {
  const state = useSelector((state) => state.directoryReducer.section);

  return (
    <>
      <div className="menu">
        {state.map(({ id, title, imageUrl, size }) => {
          return (
            <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
          );
        })}
      </div>
    </>
  );
};

export default Directory;

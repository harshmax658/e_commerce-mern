import React, { useEffect } from "react";
import ReactDom from "react-dom";
import Backdrop from "../BackDrop/BackDrop";
import OverLay from "../BackDrop/OverLay";

const BackDrop = ({ call, closeBtn, component, forProfilePhoto, callBy }) => {
  useEffect(() => {
    document.getElementById("root").style.position = "fixed";

    return () => {
      document.getElementById("root").style.position = "relative";
    };
  }, []);
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop call={call} closeBtn={closeBtn} callBy={callBy} />,
        document.getElementById("overlay")
      )}
      {ReactDom.createPortal(
        <OverLay
          call={call}
          createNewPost={true}
          forProfilePhoto={forProfilePhoto}
        >
          {component}
        </OverLay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default BackDrop;

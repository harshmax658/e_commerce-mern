import React, { useEffect, useState } from "react";
import ContactForm from "../../components/contact form/ContactForm";
import CustomButton from "../../components/custom-button/CustomButton";
import "./contact.css";
// import { fetchUsersFromDb, fetchUserByName } from "../../backednApiCall/Api";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Contact = () => {
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      setTimeout(() => {
        history.push("signin");
      }, 3000);
    }
  }, []);

  const contactAdmin = async (data, resetVal) => {
    data.user = currentUser._id;

    const fetchData = await fetch("api/complaint/add-complaint", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (fetchData.status === 200) {
      alert("Message send");
      resetVal();
    } else {
      alert("Internal server error");
    }
  };
  return (
    <div className="center">
      {currentUser ? (
        <div>
          <ContactForm
            name={currentUser.displayName}
            email={currentUser.email}
            contactAdmin={contactAdmin}
          />
        </div>
      ) : (
        <h2>redirecting to sigin page</h2>
      )}
      {/* <div className="items">{state}</div> */}
    </div>
  );
};

export default Contact;

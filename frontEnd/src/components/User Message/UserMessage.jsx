import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MessageBox from "../../pages/admin/MessageBox/MessageBox";

const UserMessage = () => {
  const { currentUser } = useSelector(({ userReducer }) => userReducer);
  const history = useHistory();
  useEffect(() => {
    if (!currentUser) history.push("/");
  }, []);
  console.log(currentUser?.complaint);
  return (
    <div>
      <>
        <h2>Hello {currentUser?.displayName} your send messages</h2>
        <MessageBox />
      </>
    </div>
  );
};

export default UserMessage;

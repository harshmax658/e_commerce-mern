import { useState } from "react";

const UseLoginAndSignin = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [newSignup, setNewSignup] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  if (props === "login") {
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setLogin((prev) => {
        return { ...prev, [name]: value };
      });
    };
    const resetHandler = () => {
      setLogin({
        email: "",
        password: "",
      });
    };
    return { login, onChangeHandler, resetHandler };
  }
  if (props === "signup") {
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setNewSignup((prev) => {
        return { ...prev, [name]: value };
      });
    };
    const resetHandler = () => {
      setNewSignup({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    };
    return { newSignup, onChangeHandler, resetHandler };
  }
};

export default UseLoginAndSignin;

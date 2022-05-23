import React from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./signUp.scss";
import UseLoginAndSignin from "../../customHook/UseLoginAndSignin";

import { useDispatch } from "react-redux";

import { SignUpStyle } from "./SignupStyle";

const SignUp = () => {
  const { newSignup, onChangeHandler, resetHandler } =
    UseLoginAndSignin("signup");

  const { displayName, email, password, confirmPassword } = newSignup;

  const Signup = async () => {
    const response = await fetch("api/user/create-user", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: "include",
      body: JSON.stringify(newSignup),
    });
    const data = await response.json();
    if (response.status === 200) {
      resetHandler();

      alert("registerd successfully please login");
    } else {
      console.log(data);
      console.log("error");
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password are not match");
      return;
    } else {
      Signup();
    }
    // dispatch(signUpStart(newSignup));
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName, password });
    // } catch (error) {
    //   console.log("Error", error);
    // }
  };

  return (
    <SignUpStyle>
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign_up_form" onSubmit={submitHandler}>
        <FormInput
          value={displayName}
          type="text"
          label="Dispaly Name"
          name="displayName"
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={onChangeHandler}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpStyle>
  );
};

export default SignUp;

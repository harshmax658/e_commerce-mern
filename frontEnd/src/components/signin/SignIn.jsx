import React from "react";
import UseLoginAndSignin from "../../customHook/UseLoginAndSignin";
import FormInput from "../formInput/FormInput";
import "./signin.scss";
import CustomButton from "../custom-button/CustomButton";
import { useDispatch } from "react-redux";

import { LoginStyle } from "./SigninStyle";

import { signInSuccess } from "../../redux/user/action";
const SignIn = () => {
  const { login, onChangeHandler } = UseLoginAndSignin("login");
  const { email, password } = login;
  const dispatch = useDispatch();

  const SignInUser = async () => {
    const response = await fetch("api/user/get-user", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(login),
    });
    if (response.status === 200) {
      const data = await response.json();
      dispatch(signInSuccess(data.data));
    } else {
      console.log("error");
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (email.trim().length > 3 && password.length > 3) {
      SignInUser();
    }
  };
  return (
    <LoginStyle>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={loginHandler}>
        <FormInput
          value={email}
          type="email"
          name="email"
          label="Email"
          onChange={onChangeHandler}
        />

        <FormInput
          value={password}
          type="password"
          label="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <div className="buttons">
          <CustomButton value="Login">Sign In</CustomButton>
          {/* <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
            value="Login"
          >
            Sign in with Google
          </CustomButton> */}
        </div>
      </form>
    </LoginStyle>
  );
};

export default SignIn;

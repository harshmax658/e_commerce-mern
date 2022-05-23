import React, { useEffect, useState } from "react";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./signInAndSignup.scss";
import "./signInAndSignup.css";

import { CustomButtonStyle } from "./SigninSignupStyle";
const SignInAndSignup = () => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setShow(true);
    }
  }, []);

  return (
    <>
      <div className="signIn_and_signUp">
        {show && (
          <>
            <SignIn /> <SignUp />
          </>
        )}
      </div>
      {!show && (
        <>
          <CustomButtonStyle onClick={() => setLogin(!login)}>
            {login ? "Signup" : "Login"}
          </CustomButtonStyle>
          {login ? <SignIn /> : <SignUp />}
        </>
      )}
    </>
  );
};

export default SignInAndSignup;

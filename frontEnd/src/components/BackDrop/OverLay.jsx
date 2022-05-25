import React from "react";
import { Post, Center } from "./backDropStyle";
const OverLay = ({ children, call, createNewPost, forProfilePhoto }) => {
  return (
    <Center>
      <Post
        className="ll"
        call={call}
        createNewPost={createNewPost}
        forProfilePhoto={forProfilePhoto}
      >
        {children}
      </Post>
    </Center>
  );
};

export default OverLay;
//Harsh

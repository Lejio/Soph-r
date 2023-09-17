"use client";

import React from "react";
import ImageComponent from "./components/ImageComponent";
import Chat from "./components/Chat";
import { useState } from "react";

const page = () => {
  const [user, setUser] = useState({});
  return (
    <>
      {Object.keys(user).length > 0 ? (
        <Chat user_metadata={user} />
      ) : (
        <ImageComponent user_metadata={user} user_setter={setUser} />
      )}
    </>
  );
};

export default page;

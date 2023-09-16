"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

const page = () => {
  return (
    <div className=" flex flex-col align-middle justify-center h-[100vh] w-[100vw]">
      <div className=" px-[20%]">
        <h1 className=" text-3xl py-5">Welcome to Sophér</h1>
        <p>Create an account to get started</p>
        <div className=" flex flex-col py-5">
          <Button className="py-5">Continue with Google</Button>
          <Button className="py-5">Continue with Email</Button>
        </div>

        <p className="py-5">
          Already have an account? <Link href="#">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default page;

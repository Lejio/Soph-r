"use client";

import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const router = useRouter();

  const handleLoginSwitch = () => {
    if (hasAccount === false) {
      setHasAccount(true);
    } else {
      setHasAccount(false);
    }
  };

  const loginHandler = async () => {
    router.push("/camera");
  };
  return (
    <div className=" flex flex-col align-middle justify-center h-[100vh] w-[100vw]">
      <div className=" px-[10%] text-center">
        <h1 className=" md:text-5xl text-3xl py-5">
          {hasAccount ? "Login to Sophér" : "Welcome to Sophér"}
        </h1>
        <p className=" text-sopher-gray text-sm">
          {hasAccount
            ? "Choose one of the login methods"
            : "Create an account to get started"}
        </p>
        <div className=" flex flex-col py-5">
          <Button className="py-5" onClick={loginHandler} radius="md">
            Continue with Google
          </Button>
          <Spacer y={4} />
          <Button className="py-5" radius="md">
            Continue with Email
          </Button>
        </div>

        <p className="pt-10 text-sopher-gray text-sm hover:cursor-pointer">
          {hasAccount ? "Don't have an account? " : "Already have an account? "}
          <Link className="text-sm" onClick={handleLoginSwitch}>
            {hasAccount ? "Sign up" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

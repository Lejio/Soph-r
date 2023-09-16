"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React from "react";

const NavButton = () => {
  const router = useRouter();
  const navHandler = () => {
    router.push("/login");
  };
  return (
    <Button color="secondary" onClick={navHandler}>
      Nav to Login
    </Button>
  );
};

export default NavButton;

"use client";

import React from "react";
import { Button } from "@nextui-org/react";

type onboardingType = {
  name: string;
  userInput: string;
};

const Onboarding = ({ name, userInput }: onboardingType) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div>{userInput}</div>
      </div>

      <div>
        <Button>EDIT</Button>
      </div>
    </div>
  );
};

export default Onboarding;

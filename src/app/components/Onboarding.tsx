"use client";

import React from "react";
import { Button } from "@nextui-org/react";

type onboardingType = {
  name: string;
  userInput: string;
  placeholder: string;
  formType: string;
};

const Onboarding = ({
  name,
  formType,
  userInput,
  placeholder,
}: onboardingType) => {
  /**add handleInput
   *
   *
   */

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <input
          type={formType}
          value={userInput}
          // onChange={handleInput}
          placeholder={placeholder}
        />

      </div>

      <div>
        <Button>EDIT</Button>
      </div>
    </div>
  );
};

export default Onboarding;

import React from "react";
import Onboarding from "../components/Onboarding";

const page = () => {
  // Define an array of data with different values for name and userInput
  const onboardingData = [
    { name: "First Name", userInput: "Input 1" },
    { name: "Middle Name", userInput: "Input 2" },
    { name: "Last Name", userInput: "Input 3" },
  ];

  return (
    <div>
      {onboardingData.map((data, index) => (
        <Onboarding key={index} name={data.name} userInput={data.userInput} />
      ))}
    </div>
  );
};

export default page;

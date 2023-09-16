"use client";
import React from "react";
import Onboarding from "../components/Onboarding";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const page = () => {
  // Define an array of data with different values for name and userInput
  const onboardingData = [
    {
      name: "First Name",
      userInput: "Input 1",
      placeholder: "(Blank)",
      formType: "text",
    },
    {
      name: "Middle Name",
      userInput: "Input 2",
      placeholder: "(Blank)",
      formType: "text",
    },
    {
      name: "Last Name",
      userInput: "Input 3",
      placeholder: "(Blank)",
      formType: "text",
    },
    {
      name: "Date of Birth",
      userInput: "",
      placeholder: "(Blank)",
      formType: "date",
    },
    {
      name: "Phone",
      userInput: "",
      placeholder: "(Blank)",
      formType: "phoneNumber",
    },
    { name: "Email", userInput: "", placeholder: "(Blank)", formType: "email" },
  ];

  return (
    <div className=" m-20">
      {onboardingData.map((data, index) => (
        <Onboarding
          key={index}
          name={data.name}
          userInput={data.userInput}
          placeholder={data.placeholder}
          formType={data.formType}
        />
      ))}

      <div>
        <h1>Gender</h1>
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Select a Gender</Button>
        </DropdownTrigger>

        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="male">Male</DropdownItem>
          <DropdownItem key="female">Female</DropdownItem>
          <DropdownItem key="other">Other</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <div>
        <Button>EDIT</Button>
      </div>
    </div>
  );
};

export default page;

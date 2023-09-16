import React from "react";
// import LoginModal from "./components/LoginModal";
// import LoadingHeader from "./components/LoadingHeader";
import NavButton from "./components/NavButton";

export default async function Home() {
  return (
    <main>
      {/* {Login module. Commented out for now. Will need this when we decide to implement authentication.} */}
      {/* <div className=" mt-10">HopHacks 2023: Sophér!</div>
      <LoginModal /> */}
      <div className=" py-[50%]">
        Main Menu!
        <NavButton />
      </div>
    </main>
  );
}

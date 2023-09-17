import React from "react";
import LoginPage from "./components/LoginPage";
import WebPage from "./components/WebPage";

export default async function Home() {
  return (
    <main>
      <div className="block md:hidden">
        <LoginPage />
      </div>
      <div className="hidden md:block">
        <WebPage />
      </div>
    </main>
  );
}

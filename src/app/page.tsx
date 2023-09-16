import React from "react";
import LoginModal from "./components/LoginModal";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabaseServer = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  // if (session) {
  //   console.log(session.user.user_metadata);
  // } else {
  //   console.log(session);
  // }

  return (
    <main>
      <div className=" mt-10">HopHacks 2023: Sophér!</div>
      <LoginModal />
    </main>
  );
}

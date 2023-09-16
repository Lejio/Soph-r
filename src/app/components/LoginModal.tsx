"use client";

import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@/utils/supabase";

const LoginModal = () => {
  const loginHandler = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  return (
    <Card>
      <CardBody>
        <Button color="secondary" onClick={loginHandler}>
          Test Login
        </Button>
        {}
      </CardBody>
    </Card>
  );
};

export default LoginModal;

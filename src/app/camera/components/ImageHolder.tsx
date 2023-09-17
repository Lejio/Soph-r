"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineBan } from "react-icons/hi";

const ImageHolder = ({
  src,
  image,
  user_setter,
}: {
  src: string;
  image: string;
  user_setter: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  const handleSendRequest = async () => {
    const response = await fetch("/api/send_image", {
      method: "POST",
      body: JSON.stringify({ "image-url-base64": image }),
    });

    console.log(image);

    const res = await response.json();
    console.log(res);
    user_setter = res;
  };

  return (
    <Card className=" bg-slate-200">
      <CardBody>
        <div className=" h-[30rem] w-full">
          {src !== "" ? (
            <Image
              src={src}
              alt="Image Placeholder"
              width={100}
              height={100}
              className=" w-full"
            />
          ) : (
            <HiOutlineBan />
          )}
        </div>
      </CardBody>
      {src ? (
        <CardFooter className=" justify-center align-middle">
          <Button color="success" onClick={handleSendRequest}>
            Confirm Image
          </Button>
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ImageHolder;

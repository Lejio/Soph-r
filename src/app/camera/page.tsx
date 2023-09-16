"use client";

import React from "react";
import ImageHolder from "./components/ImageHolder";
import { Button, Spacer } from "@nextui-org/react";
import { HiCog, HiUserCircle, HiCamera } from "react-icons/hi";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";

const page = () => {
  var imageUrl = null;
  // const images = [];
  const [image, setImage] = useState("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });
    setImage(`data:image/png;base64,${image.base64String!}`);
    imageUrl = image.base64String;
    const response = await fetch("/api/send_image", {
      method: "POST",
      body: JSON.stringify({ "image-url-base64": imageUrl }),
    });
  };
  return (
    <div className=" flex flex-col justify-between align-middle text-center w-[100vw] h-[100vh] p-[10%] pt-[20%]">
      <ImageHolder src={image} />
      <div className="flex flex-row justify-evenly h-[10%]">
        <Button isIconOnly radius="full" className=" w-16 h-16">
          <HiCog size={50} />
        </Button>
        <Spacer y={4} />
        <Button
          isIconOnly
          onClick={takePicture}
          radius="full"
          className=" h-16 w-16"
        >
          <HiCamera size={50} />
        </Button>
        <Spacer y={4} />
        <Button isIconOnly radius="full" className=" w-16 h-16">
          <HiUserCircle size={50} />
        </Button>
      </div>
    </div>
  );
};

export default page;

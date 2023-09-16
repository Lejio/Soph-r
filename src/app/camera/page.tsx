"use client";

import React from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Button } from "@nextui-org/react";

const page = () => {
  var imageUrl = null;

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    var imageUrl = image.webPath;
  };

  console.log(imageUrl);

  return (
    <div className=" pt-[20%]">
      <Button onClick={takePicture}>Use Camera</Button>
    </div>
  );
};

export default page;

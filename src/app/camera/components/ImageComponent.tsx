import React from "react";
import ImageHolder from "./ImageHolder";
import { Button, Spacer } from "@nextui-org/react";
import {
  HiOutlineCog,
  HiOutlineUserCircle,
  HiOutlineCamera,
} from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import { CiUser, CiFileOn, CiSettings } from "react-icons/ci";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";

const style = {
  color: "#DC143C",
};

const icon_style = {
  color: "white",
};

const ImageComponent = () => {
  // const images = [];
  const [image, setImage] = useState("");
  const [raw_image, setRaw_Image] = useState("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });
    setImage(`data:image/png;base64,${image.base64String!}`);
    setRaw_Image(image.base64String!);
    const response = await fetch("/api/send_image", {
      method: "POST",
      body: JSON.stringify({ "image-url-base64": image }),
    });

    const res = await response.json();
    console.log(res);
  };
  return (
    <div className=" flex flex-col text-center w-[100vw] h-[100vh]">
      <ImageHolder src={image} image={raw_image!} />
      <div className=" flex flex-col justify-around h-[20%]">
        <div className="flex flex-row justify-evenly bg-sopher-red py-[12%]">
          <div className=" flex flex-col text-white">
            <Button
              isIconOnly
              radius="full"
              className=" w-14 h-14 bg-transparent"
            >
              <CiUser size={35} style={icon_style} />
            </Button>
            Profile
          </div>
          <Spacer y={4} />
          <Button
            isIconOnly
            onClick={takePicture}
            radius="full"
            className=" h-16 w-16 bg-white"
          >
            <FiCircle size={60} style={style} />
          </Button>
          <Spacer y={4} />
          <div className=" flex flex-col text-white">
            <Button
              isIconOnly
              radius="full"
              className=" w-14 h-14 bg-transparent"
            >
              <CiFileOn size={35} style={icon_style} />
            </Button>
            Files
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;

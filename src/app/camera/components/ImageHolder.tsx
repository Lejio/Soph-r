"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
import { HiCog, HiUserCircle, HiCamera } from "react-icons/hi";

const ImageHolder = ({ src, image }: { src: string; image: string }) => {
  const handleSendRequest = async () => {
    const response = await fetch("/api/send_image", {
      method: "POST",
      body: JSON.stringify({ "image-url-base64": image }),
    });

    const res = await response.json();
    console.log(res);
  };

  return (
    <Card className=" bg-slate-200">
      <CardBody className=" flex-row">
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
            <>
              <Card>
                <CardBody>
                  <div className=" flex flex-row">
                    <HiCog size={25} /> <Spacer x={4} /> Settings
                  </div>
                </CardBody>
              </Card>
              <Spacer y={4} />
              <Card>
                <CardBody>
                  <div className=" flex flex-row">
                    <HiCamera size={25} /> <Spacer x={4} /> Camera
                  </div>
                </CardBody>
              </Card>
              <Spacer y={4} />
              <Card>
                <CardBody>
                  <div className=" flex flex-row">
                    <HiUserCircle size={25} /> <Spacer x={4} /> Profile
                  </div>
                </CardBody>
              </Card>
            </>
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

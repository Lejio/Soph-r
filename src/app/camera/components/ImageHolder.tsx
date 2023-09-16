"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineBan } from "react-icons/hi";

const ImageHolder = ({ src }: { src: string }) => {
  return (
    <Card className=" bg-slate-200">
      <CardBody>
        <div className=" h-[35rem] w-80">
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
    </Card>
  );
};

export default ImageHolder;

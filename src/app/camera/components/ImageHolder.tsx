"use client";

import React from "react";
import Image from "next/image";
import ResponseModal from "./ResponseModal";

const style = {
  color: "white",
};

const ImageHolder = ({ src, image }: { src: string; image: string }) => {
  return (
    <>
      <div className=" flex flex-col justify-end align-middle h-full w-full ">
        {src !== "" ? (
          <>
            <div className=" flex flex-col">
              <div className="py-5 text-2xl">
                <p className=" font-bold tracking-[.2rem]">Sophér</p>
              </div>
              <Image
                src={src}
                alt="Image Placeholder"
                width={100}
                height={100}
                className=" w-full"
              />
              <ResponseModal />
              <div className=" flex flex-col justify-center h-10">
                <p className=" text-gray-500">1/1</p>
              </div>
            </div>
          </>
        ) : (
          <div className=" h-full flex flex-col align-middle justify-center">
            <h2 className=" text-slate-700">
              Tap on the camera to start scanning.
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageHolder;

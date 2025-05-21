import React from "react";
import Nav from "./nav";
import Image from "next/image";
import Button from "@/component/button";

const Hero = () => {
  return (
    <div className=" relative w-full md:h-screen ">
      {/* <div className="fixed top-0 left-0 w-full h-[8.3333vh] z-10">
        <div className="mx-auto max-w-6xl w-full pt-5 ">
          <Nav />
        </div>
      </div> */}
      <div className="sticky h-1/12 pt-5">
        <Nav />
      </div>
      <div className="w-full max-h-11/12 px-auto py-0 h-11/12  md:flex ">
        <div className=" md:w-1/2 w-full flex flex-col justify-center gap-8 md:gap-5 lg:gap-8 px-8  md:px-24 md:h-11/12 h-2/5 md:items-start items-center md:text-start text-center my-8  md:my-0 ">
          <p className="text-6xl lg:text-7xl md:text-5xl font-bold text-amber-200">
            Software Developer
          </p>
          <p className="text-md md:text-md lg:text-lg">
            I am Olamide — a web and mobile developer with a passion for
            creating beautiful and responsive digital experiences that blend
            design, functionality, and performance.
          </p>
          <div className="flex gap-5">
            <Button label="Contact me" className="" />
            <Button label="Download CV" className="" />
          </div>
        </div>

        <div className="flex md:w-1/2 md:h-full h-8/12 w-full items-center justify-center">
          <div className="flex h-full  justify-center items-end md:w-full w-8/12 bg-[radial-gradient(circle,_#565194_5%,_#050508_55%)] rounded-full">
            <Image
              src="/profile2.png"
              alt=""
              width={400}
              height={400}
              className="h-full w-full md:h-10/12 md:w-9/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

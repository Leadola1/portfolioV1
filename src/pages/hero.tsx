import React from "react";
import Nav from "./nav";
import Image from "next/image";
import Button from "@/component/button";

const Hero = () => {
  return (
    <div className=" relative w-full h-screen pt-5 ">
      <div className="sticky ">
        <Nav />
      </div>
      <div className="w-full max-h-full px-auto py-0 h-full  md:flex ">
        <div className=" md:w-1/2 w-full flex flex-col justify-center gap-8 md:gap-7 px-8 md:px-24 md:h-11/12 h-2/5 md:items-start items-center md:text-start text-center my-10  md:my-0">
          <p className="text-6xl md:text-7xl font-bold text-amber-200">
            Software Developer
          </p>
          <p className="text-lg">
            I am Olamide — a web and mobile developer with a passion for
            creating beautiful and responsive digital experiences that blend
            design, functionality, and performance.
          </p>
          <div className="flex gap-5">
            <Button label="Contact me" className="" />
            <Button label="Download CV" className="" />
          </div>
        </div>

        <div className="md:w-1/2 md:h-full h-8/12 w-full ">
          <div className="flex h-full  justify-center items-end">
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

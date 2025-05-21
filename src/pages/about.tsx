import React from "react";
import Image from "next/image";
import { aboutCardsData } from "@/constants/data";
import AboutCard from "@/component/aboutCard";

const About = () => {
  return (
    <div className=" relative w-full md:h-screen pt-5 ">
      <div className=" md:h-2/12 pt-5 flex items-end pb-5 justify-center ">
        <h1 className="text-center text-2xl text-amber-200">About Me</h1>
      </div>
      <div className="w-full md:max-h-10/12 px-auto py-0 md:h-10/12  md:flex ">
        <div className=" md:w-1/2 w-full flex flex-col justify-center gap-8 md:gap-7 px-8  md:px-8 lg:px-12 md:h-11/12  items-center md:text-start text-center py-10 md:py-0 ">
          <div className="flex flex-col gap-5 text-center">
            <h3 className="text-lg">Mobile and Web Development Specialist</h3>
            <p className="text-sm">
              I am a frontend developer focused on building intuitive and
              efficient mobile and web applications. I specialize in React
              Native, TypeScript, and Tailwind CSS, with experience developing
              responsive UIs, integrating local databases, and handling complex
              state management.
            </p>
            <p className="text-sm">
              Over the past two years, I’ve worked on cross-platform apps with a
              focus on performance, accessibility, and clean architecture. I'm
              passionate about solving real-world problems through code and
              constantly improving both my technical and design skills.
            </p>
            <p className="text-sm">
              Outside of development, I enjoy exploring minimalist UI design,
              learning about new frameworks, and taking long walks to clear my
              mind.
            </p>
          </div>
        </div>
        <div className=" flex md:w-1/2 md:h-11/12  w-full items-center justify-center ">
          <div className="flex h-full md:w-full w-full flex-col gap-y-2  justify-center ">
            <div className="flex flex-col gap-5  items-center md:items-start">
              {aboutCardsData.map((data) => (
                <AboutCard
                  icon={data.icon}
                  header={data.header}
                  para={data.para}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

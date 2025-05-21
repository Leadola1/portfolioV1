import React from "react";

const Nav = () => {
  return (
    <div className=" flex justify-between py-3 bg-[#4F4B884D] rounded-4xl px-8 items-center max-w-6xl mx-auto ">
      <h1 className="text-lg md:text-2xl ">LAWAL BASIT OLAMIDE</h1>
      <div className="lg:flex lg:gap-14 hidden items-center">
        <p>About me</p>
        <p>Technologies</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Nav;

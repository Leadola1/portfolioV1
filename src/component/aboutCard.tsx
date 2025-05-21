import React from "react";
export interface IAboutCard {
  icon: string;
  header: string;
  para: string;
}

const AboutCard: React.FC<IAboutCard> = ({ icon, header, para }) => {
  return (
    <div className="py-5 bg-[#4F4B884D] flex gap-5 px-10 w-9/12 md:w-10/12 rounded-2xl">
      <p>{icon}</p>
      <div>
        <p className="text-lg text-amber-100">{header}</p>
        <p className="text-sm">{para}</p>
      </div>
    </div>
  );
};

export default AboutCard;

import React from "react";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ label, onClick, className }: IButtonProps) => {
  return (
    <div>
      <button
        className={`px-5 py-1 border-2 rounded-xl text-md active:bg-[#048FF6] active:border-[#048FF6] hover:scale-105 transition-transform duration-100 cursor-pointer ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

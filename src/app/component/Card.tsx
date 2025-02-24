"use client";

import { JSX } from "react";

interface CardProps {
  title?: string;
  description?: string;
  icon?: JSX.Element;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="card relative bg-white text-center rounded-xl shadow-xl h-min-100 w-full p-8">
      <div className="card-content flex flex-col items-center gap-6 justify-center">
        {icon && (
          <div className="card-icon rounded-md bg-pink-300 bg-opacity-10 p-4">
            {icon}
          </div>
        )}
        {title && (
          <span className="font-bold font-italic text-base">{title}</span>
        )}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;

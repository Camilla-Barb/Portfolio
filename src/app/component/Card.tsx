"use client";

import { JSX } from "react";

interface CardProps {
  title?: string;
  description?: string;
  icon?: JSX.Element;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <li className="card relative bg-white text-center rounded-xl shadow-xl h-min-100 w-full p-8">
      <div className="card-content flex flex-col items-center gap-10 justify-center">
        {icon && (
          <div className="card-icon rounded-md bg-pink-500 bg-opacity-10 p-4">
            {icon}
          </div>
        )}
        {title && <span className="font-bold">{title}</span>}
        {description && <p>{description}</p>}
      </div>
    </li>
  );
};

export default Card;

import React from "react";
import { useGlobalContext } from "../context/Context";

const Card = ({ children }) => {
  const { darkMode } = useGlobalContext();
  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;

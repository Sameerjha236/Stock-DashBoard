import React from "react";
import Card from "./Card";
import { useGlobalContext } from "../context/ThemeContext";
const Details = ({ details }) => {
  const { darkMode } = useGlobalContext();
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };
  const millToBill = (num) => {
    return (num / 1000).toFixed(2);
  };
  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : ""
        }`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center "
            >
              <span>{detailsList[item]} </span>
              <span>
                {" "}
                {item === "marketCapitalization"
                  ? `${millToBill(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;

import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <div className="flex flex-col">
      <div className="xl:px-32 flex flex-col justify-between">
        <h1 className="text-3xl sm:text-5xl">{name}</h1>
        <Search />
      </div>
      <ThemeIcon />
    </div>
  );
};

export default Header;

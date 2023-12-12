import React from "react";

const Menu = (props) => {
  return (
    <svg
      className={`${props.menu ? "block" : "hidden"} md:-mr-0.75`}
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};

export default Menu;

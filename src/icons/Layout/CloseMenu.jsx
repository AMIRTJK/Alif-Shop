import React from "react";

const CloseMenu = (props) => {
  return (
    <svg
      className={`${props.menu ? "hidden" : "block"} -mr-0.75`}
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};

export default CloseMenu;

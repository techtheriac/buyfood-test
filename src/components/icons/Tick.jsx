import * as React from "react";

const Tick = ({ fillColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.20711 0.926772L2.35355 5.78033L0 3.42677L0.707107 2.71967L2.35355 4.36611L6.5 0.219666L7.20711 0.926772Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Tick;

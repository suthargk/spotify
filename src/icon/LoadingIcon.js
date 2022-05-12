import React from "react";

const LoadingIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="44"
      height="44"
      fill="currentColor"
      className="loading"
    >
      <g fillRule="evenodd">
        <path
          d="m11.988 0c6.636 0 12.012 5.376 12.012 12s-5.376 12-12.012 12c-6.624 0-11.988-5.376-11.988-12s5.364-12 11.988-12zm.012 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10z"
          fillOpacity=".2"
        ></path>
        <path d="m24 12c0-6.624-5.364-12-12-12-1.5 0-1.5 2 0 2 6 0 10 5 10 10 0 1.5 2 1.5 2 0z"></path>
      </g>
    </svg>
  );
};

export default LoadingIcon;

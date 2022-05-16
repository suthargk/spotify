import React from "react";

const Navigation = ({ playList, onPlayListSelect = (f) => f, isActive }) => {
  return (
    <li
      className="inline-block lg:block navigation-item lg:text-gray-500 cursor-pointer px-3 py-1.5 transition duration-150 rounded-3xl border border-gray-700 lg:border-none lg:hover:text-gray-400"
      data-active={isActive.title === playList.title}
      onClick={() => onPlayListSelect(playList)}
    >
      {playList.title}
    </li>
  );
};

export default Navigation;

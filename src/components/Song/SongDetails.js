import React from "react";

const SongDetails = ({ artist, photo, title }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="">
        <img src={photo} className="h-auto w-14 rounded-full" alt={title} />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-100 text-base font-light capitalize tracking-wider">
          {title.length < 25 ? title : `${title.slice(0, 25)}...`}
        </span>
        <span className="text-gray-400 font-light text-sm capitalize">
          {artist}
        </span>
      </div>
    </div>
  );
};

export default SongDetails;

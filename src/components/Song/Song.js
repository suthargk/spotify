import React from "react";
import Demons from "../../assets/images/Demons.jpg";

const Song = ({
  song: { artist, duration, photo, title, url },
  onSongSelected
}) => {
  const durationStr = duration.toString();
  return (
    <li className="style-none cursor-pointer p-2" onClick={() => onSongSelected({artist, duration, photo, title, url})}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="">
            <img src={photo} className="h-12 w-12 rounded-full" alt={title} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-100 text-base font-light capitalize tracking-wider">
              {title.length < 25? title : `${title.slice(0, 25)}...`}

            </span>
            <span className="text-gray-400 font-light text-sm capitalize">
              {artist}
            </span>
          </div>
        </div>

        <div>
          <span className="text-gray-400">
            {durationStr[0]}:{durationStr.slice(1)}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Song;

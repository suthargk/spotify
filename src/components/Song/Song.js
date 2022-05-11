import React from "react";
import Demons from "../../assets/images/Demons.jpg";

const Song = ({ song }) => {
  return (
    <li className="style-none">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="">
              <img
                src={Demons}
                className="h-12 w-12 rounded-full"
                alt="torchlight in the sky"
              />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-100 text-lg font-light capitalize tracking-wider">
              {song.songName}
            </span>
            <span className="text-gray-400 font-light text-sm capitalize">{song.artistName}</span>
          </div>
        </div>

        <div>
          <span className="text-gray-400">{song.time}</span>
        </div>
      </div>
    </li>
  );
};

export default Song;

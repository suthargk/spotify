import React, { useState } from "react";
import PlayIcon from "../../icon/PlayIcon";

const OngoingSong = ({
  currentSong: { artist, duration, photo, title, url },
  onPlayerMaximize,
  onPrevTrack,
  onNextTrack
}) => {
  return (
    <div className="ongoing-song fixed bottom-0 rounded-md left-0 h-14 w-full bg-gray-800">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center space-x-4 w-11/12"
          onClick={() => onPlayerMaximize(true)}
        >
          <div className="">
            <img src={photo} className="h-auto w-14" alt={title} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-100 text-sm font-light capitalize tracking-wider">
              {title}
            </span>
            <span className="text-gray-400 font-light text-xs capitalize">
              {artist}
            </span>
          </div>
        </div>
        <div className="mr-4 flex flex-row-reverse w-1/12">
          <button type="button" onClick={onPrevTrack}>
            Prev
          </button>
          <button className="text-gray-400">
            <PlayIcon />
          </button>
          <button type="button" onClick={onNextTrack}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default OngoingSong;
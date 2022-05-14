import React from "react";

import AudioControl from "./AudioControl";

const MaximizePlayer = ({
  isPlayerMaximize,
  onPlayerMaximize,
  onPrevTrack,
  onNextTrack,
  isPlaying,
  onPlaying,
  currentSong: { title, photo, url, artist },
}) => {
  return (
    <div
      data-active={isPlayerMaximize}
      className="maximize-player h-full w-full bg-gray-800 flex flex-col justify-center p-5"
    >
      <div className="mb-12" onClick={() => onPlayerMaximize(false)}>
        <div className="mb-16 shadow-xl">
          <img src={photo} className="w-full h-auto" />
        </div>
        <div className="text-3xl font-semibold mb-2">{title}</div>
        <div className="text-base font-semibold">{artist}</div>
      </div>
      <div className="">
          <AudioControl onPrevTrack={onPrevTrack} onNextTrack={onNextTrack} isPlaying={isPlaying} onPlaying={onPlaying}/>
      </div>
    </div>
  );
};

export default MaximizePlayer;

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
  trackProgress,
  duration,
  onScrub,
  onScrubEnd
}) => {
  return (
    <div
      data-active={isPlayerMaximize}
      className="maximize-player absolute top-0 left-0 bottom-0 right-0 h-full w-full bg-gray-800 p-5 flex flex-col justify-center lg:relative "
    >
      <div className="mx-auto space-y-6">
        <div onClick={() => onPlayerMaximize(false)}>
        <div className="mb-12 flex justify-center">
            <img
              src={photo}
              className="shadow-xl aspect-square"
            />
          </div>
          <div className="text-3xl font-semibold mb-2">{title}</div>
          <div className="text-base font-semibold">{artist}</div>
        </div>
        <div className="">
          <AudioControl
            onPrevTrack={onPrevTrack}
            onNextTrack={onNextTrack}
            isPlaying={isPlaying}
            onPlaying={onPlaying}
            trackProgress={trackProgress}
            duration={duration}
            onScrub={onScrub}
            onScrubEnd={onScrubEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default MaximizePlayer;

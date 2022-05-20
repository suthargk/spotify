import React from "react";

import AudioControl from "./AudioControl";
import CaretDownIcon from "../../icon/CaretDownIcon";
import NoSong from "../../icon/NoSong";

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
  onScrubEnd,
}) => {
  return (
    <div
      data-active={isPlayerMaximize}
      className="maximize-player absolute top-0 left-0 bottom-0 right-0 h-full w-full bg-gray-800 lg:bg-transparent p-5 lg:p-0 flex flex-col justify-center lg:relative"
    >
      <div className="mx-auto space-y-6 lg:space-y-0 lg:w-3/5">
        <div onClick={() => onPlayerMaximize(false)}>
          <div className="hidden lg:block lg:mb-6">
            <div className="text-2xl font-semibold mb-0.5">
              {title}
            </div>
            <div className="text-base font-light text-gray-400">
              {artist}
            </div>
          </div>
          <div className="block mx-4 lg:hidden">
            <CaretDownIcon />
          </div>
          <div className="mb-12 lg:mb-6 flex justify-center">
           {photo ?  <img
              src={photo}
              className="shadow-xl h-80	w-80 rounded-md aspect-square lg:w-full lg:h-auto"
              draggable="false"
            /> : <span className="shadow-xl h-80	w-80 rounded-md aspect-square lg:w-full lg:h-auto"><NoSong className=""/></span>}
          </div>
          <div className="lg:hidden text-3xl font-semibold mb-2">{title}</div>
          <div className="lg:hidden text-base font-semibold">{artist}</div>
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
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default MaximizePlayer;

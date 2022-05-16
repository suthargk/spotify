import React from "react";
import OptionIcon from "../../icon/OptionIcon";
import PrevIcon from "../../icon/PrevIcon";
import PlayMaximizeIcon from "../../icon/PlayMaximizeIcon";
import PauseMaximizeIcon from "../../icon/PauseMaximizeIcon";
import NextIcon from "../../icon/NextIcon";
import VolumeIcon from "../../icon/VolumeIcon";

const AudioControl = ({
  onPrevTrack,
  onNextTrack,
  isPlaying,
  onPlaying,
  trackProgress,
  duration,
  onScrub,
  onScrubEnd,
  title,
}) => {
  return (
    <div className="w-full space-y-4 lg:space-y-8">
      <div className="flex justify-center items-center">
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="w-full h-1.5"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          disabled={!title}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="audio-control-buttons">
          <button type="button" disabled={!title}>
            <OptionIcon />
          </button>
        </div>

        <div className="audio-control-buttons flex items-center space-x-5">
          <button type="button" onClick={onPrevTrack} disabled={!title}>
            <PrevIcon />
          </button>
          <button
            type="button text-gray-800"
            onClick={() => onPlaying(!isPlaying)}
            disabled={!title}
          >
            {isPlaying ? <PauseMaximizeIcon /> : <PlayMaximizeIcon />}
          </button>
          <button type="button" onClick={onNextTrack} disabled={!title}>
            <NextIcon />
          </button>
        </div>

        <div className="audio-control-buttons">
          <button type="button" disabled={!title}>
            <VolumeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioControl;

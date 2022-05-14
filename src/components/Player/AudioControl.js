import React from "react";
import OptionIcon from "../../icon/OptionIcon";
import PrevIcon from "../../icon/PrevIcon";
import PlayMaximizeIcon from "../../icon/PlayMaximizeIcon";
import PauseMaximizeIcon from "../../icon/PauseMaximizeIcon";
import NextIcon from "../../icon/NextIcon";
import VolumeIcon from "../../icon/VolumeIcon";

const AudioControl = ({onPrevTrack, onNextTrack, isPlaying, onPlaying}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <button type="button">
          <OptionIcon />
        </button>
      </div>

      <div className="flex items-center space-x-5">
        <button type="button" onClick={onPrevTrack}>
          <PrevIcon />
        </button>
        <button type="button" onClick={() => onPlaying(!isPlaying)}>
            {isPlaying ?  <PauseMaximizeIcon />: <PlayMaximizeIcon />  }
        </button>
        <button type="button" onClick={onNextTrack}>
          <NextIcon />
        </button>
      </div>

      <div>
        <button type="button">
          <VolumeIcon />
        </button>
      </div>
    </div>
  );
};

export default AudioControl;

import React from "react";
import SongDetails from "./SongDetails";

const Song = ({
  song: { artist, duration, photo, title, url, _id },
  onSongSelected,
  selectedSong,
}) => {
  const durationStr = duration.toString();
  return (
    <li data-active={selectedSong.title === title}
      className="song-item style-none cursor-pointer p-2"
      onClick={() => onSongSelected({ artist, duration, photo, title, url, _id })}
    >
      <div className="flex justify-between items-center">
        <SongDetails artist={artist} photo={photo} title={title} />
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

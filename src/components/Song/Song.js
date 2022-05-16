import React, { useRef, useState, useEffect } from "react";
import SongDetails from "./SongDetails";

const convertTime = (time) => {
  const timeStr = time.toString();
  const sub = +timeStr.slice(1);
  if (sub === 0) {
    return timeStr;
  } else if (sub === 60) {
    const remaining = sub - 60;
    return +timeStr[0] + 1 + "" + remaining + "0";
  } else if (Math.trunc(sub / 60) === 1) {
    const remaining = sub - 60;
    return +timeStr[0] + 1 + "" + remaining;
  } else {
    return timeStr[0] + sub;
  }
};

const Song = ({
  song: { artist, duration, photo, title, url, _id },
  onSongSelected,
  selectedSong,
}) => {
  const songItemRef = useRef(null);
  const durationStr = convertTime(duration)
  const [songItemWidth, setSongItemWidth] = useState(400);

  useEffect(() => {
    setSongItemWidth(songItemRef.current.clientWidth);
  }, [songItemRef.current]);

  return (
    <li
      ref={songItemRef}
      data-active={selectedSong.title === title}
      className="song-item style-none cursor-pointer p-2 transition duration-150 lg:hover:bg-gray-800 lg:hover:rounded-md"
      onClick={() =>
        onSongSelected({ artist, duration, photo, title, url, _id })
      }
    >
      <div className="flex justify-between items-center">
        <SongDetails
          artist={artist}
          photo={photo}
          title={title}
          songItemWidth={songItemWidth}
        />
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

import React ,{useRef,useState, useEffect} from "react";
import SongDetails from "./SongDetails";

const Song = ({
  song: { artist, duration, photo, title, url, _id },
  onSongSelected,
  selectedSong,
}) => {
  const songItemRef = useRef(null)
  const durationStr = duration.toString();
  const [songItemWidth, setSongItemWidth] = useState(400)

  useEffect(() => {
    setSongItemWidth(songItemRef.current.clientWidth)
  }, [songItemRef.current])

  return (
    <li ref={songItemRef}  data-active={selectedSong.title === title}
      className="song-item style-none cursor-pointer p-2 transition duration-150 lg:hover:bg-gray-800 lg:hover:rounded-md"
      onClick={() => onSongSelected({ artist, duration, photo, title, url, _id })}
    >
      <div className="flex justify-between items-center">
        <SongDetails artist={artist} photo={photo} title={title} songItemWidth={songItemWidth}/>
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

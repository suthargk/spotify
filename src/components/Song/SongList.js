import React, {useState} from "react";
import Song from "./Song";
import LoadingIcon from "../../icon/LoadingIcon";

const SongList = ({ onSongSelected, selectedSong, songsList: {loading, error, data} }) => {
  if (loading)
    return (
      <div className="flex flex-1 justify-center items-center w-full">
        <LoadingIcon />
      </div>
    );
  return (
      <ul
        className="overflow-y-scroll p-4 pt-0 space-y-4"
      >
        {data?.getSongs?.map((song) => (
          <Song onSongSelected={onSongSelected} key={song._id} song={song} selectedSong={selectedSong}/>
        ))}
      </ul>

  );
};

export default SongList;

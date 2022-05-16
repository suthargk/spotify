import React, { useState, memo } from "react";
import Song from "./Song";
import LoadingIcon from "../../icon/LoadingIcon";
import SongsNotFound from "./SongsNotFound";

const SongList = memo(
  ({
    searchTerm,
    onSongSelected,
    selectedSong,
    songsList: { loading, error, data },
  }) => {
    const filteredData = data?.getSongs?.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (error)
      return (
        <div className="flex flex-1 justify-center items-center h-full w-full">
          <h2 className="bg-gray-50 font-semibold text-xl">Something went wrong</h2>
        </div>
      );

    if (loading)
      return (
        <div className="flex flex-1 justify-center items-center w-full">
          <LoadingIcon />
        </div>
      );

    return (
      <>
        {!filteredData.length ? (
          <SongsNotFound searchTerm={searchTerm} />
        ) : (
          <ul className="overflow-y-scroll w-full p-4 pt-0 space-y-4">
            {filteredData.map((song) => (
              <Song
                onSongSelected={onSongSelected}
                key={song._id}
                song={song}
                selectedSong={selectedSong}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
);

export default SongList;

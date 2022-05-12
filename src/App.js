import React, { useState, useCallback, useEffect } from "react";
import LoadingIcon from "./icon/LoadingIcon";
import { useQuery } from "@apollo/client";
import { GET_PLAYLISTS } from "./hooks/navigations";
import NavigationList from "./components/Navigation/NavigationList";
import SearchSong from "./components/Song/SearchSong";
import SongList from "./components/Song/SongList";
import OngoingSong from "./components/OngoingSong/OngoingSong";

const App = () => {
  const playLists = useQuery(GET_PLAYLISTS);
  const [isActive, setIsActive] = useState(() => {
    const firstPlayList = playLists?.data?.getPlaylists?.[0];
    return (
      { id: firstPlayList?.id, title: firstPlayList?.title } && {
        id: 1,
        title: "For You",
      }
    );
  });
  const [currentSong, setCurrentSong] = useState({});

  const onPlayListSelect = (playListName) => {
    setIsActive(playListName);
  };

  const onSongSelected = (songDetails) => {
    setCurrentSong(songDetails);
  };
console.log(playLists)
  if (playLists.loading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <LoadingIcon />
      </div>
    );

  return (
    <div className="bg-gray-900 rounded-md shadow-md">
      <NavigationList
        navigation_list={playLists}
        isActive={isActive}
        onPlayListSelect={onPlayListSelect}
      />
      <SearchSong />
      <SongList isActive={isActive} onSongSelected={onSongSelected} />
      <OngoingSong currentSong={currentSong} />
    </div>
  );
};

export default App;

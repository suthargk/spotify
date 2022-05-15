import React, { useState, useCallback, useEffect, useRef } from "react";
import LoadingIcon from "./icon/LoadingIcon";
import Logo from "./icon/Logo";
import { useQuery } from "@apollo/client";
import { GET_PLAYLISTS } from "./hooks/navigations";
import { useSongs } from "./hooks/useSongs";
import NavigationList from "./components/Navigation/NavigationList";
import SearchSong from "./components/Song/SearchSong";
import SongList from "./components/Song/SongList";
import MinimizePlayer from "./components/Player/MinimizePlayer";
import MaximizePlayer from "./components/Player/MaximizePlayer";

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
  const songs = useSongs(isActive.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  const [isPlayerMaximize, setIsPlayerMaximize] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onPlayListSelect = useCallback(
    (playListName) => {
      setIsActive(playListName);
    },
    [isActive]
  );

  const onSongSelected = (songDetails) => {
    setCurrentSong(songDetails);
  };

  const toFindPrevAndNextTrack = useCallback(() => {
    const songsData = songs.data.getSongs;
    const index = songsData.findIndex((song) => song._id === currentSong._id);
    return [index, songsData];
  }, [currentSong]);

  const toPrevTrack = useCallback(() => {
    let [index, songsData] = toFindPrevAndNextTrack();

    setCurrentSong(() => {
      const prevIndex = index - 1;
      if (prevIndex > -1) {
        return songsData[prevIndex];
      } else {
        return songsData[songsData.length - 1];
      }
    });
  }, [currentSong]);

  const toNextTrack = useCallback(() => {
    let [index, songsData] = toFindPrevAndNextTrack();
    setCurrentSong(() => {
      const nextIndex = index + 1;
      if (nextIndex < songsData.length) {
        return songsData[nextIndex];
      } else {
        return songsData[songsData.length - nextIndex];
      }
    });
  }, [currentSong]);

  const [trackProgress, setTrackProgress] = useState(0);
  const audioRef = useRef(new Audio(currentSong?.url));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(currentSong?.url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [currentSong]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  if (playLists.loading)
    return (
      <div className="flex items-center h-full w-full">
        <LoadingIcon />
      </div>
    );

  return (
    <div className="bg-gray-900 rounded-md lg:rounded-none shadow-md relative h-full flex flex-col lg:flex-row lg:p-8 lg:pb-0 lg:space-x-12">
      <div className="header lg:basis-1/6">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <NavigationList
          navigation_list={playLists}
          isActive={isActive}
          onPlayListSelect={onPlayListSelect}
        />
      </div>
      <div>
        <div className="hidden lg:block text-2xl font-semibold tracking-wide">
          {isActive.title}
        </div>
        <SearchSong searchTerm={searchTerm} onHandleChange={handleChange} />
        <div className="body lg:basis-2/6 flex flex-1 overflow-y-auto w-full lg:flex-col lg:space-y-6">
          <SongList
            songsList={songs}
            onSongSelected={onSongSelected}
            selectedSong={currentSong}
          />
        </div>
      </div>
      <div className="footer lg:basis-3/6">
        {isPlayerMaximize && currentSong ? (
          <MaximizePlayer
            isPlayerMaximize={isPlayerMaximize}
            onPlayerMaximize={setIsPlayerMaximize}
            currentSong={currentSong}
            onPrevTrack={toPrevTrack}
            onNextTrack={toNextTrack}
            isPlaying={isPlaying}
            onPlaying={setIsPlaying}
            trackProgress={trackProgress}
            duration={duration}
            onScrub={onScrub}
          />
        ) : (
          <MinimizePlayer
            onPlayerMaximize={setIsPlayerMaximize}
            currentSong={currentSong}
            isPlaying={isPlaying}
            onPlaying={setIsPlaying}
          />
        )}
      </div>
    </div>
  );
};

export default App;

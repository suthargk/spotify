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
  const [searchTerm, setSearchTerm] = useState("");
  const songs = useSongs(isActive.id, searchTerm);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  const [isPlayerMaximize, setIsPlayerMaximize] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioRef = useRef(new Audio(currentSong?.url));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const handleChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, [searchTerm]);

  const onPlayListSelect = useCallback(
    (playListName) => {
      setIsActive(playListName);
    },
    [isActive]
  );

  const onSongSelected = useCallback((songDetails) => {
      setCurrentSong(songDetails);
    },[songs]);

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
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(currentSong?.url);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentSong]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  if (playLists.loading)
    return (
      <div className="flex items-center justify-center h-full w-full">
        <LoadingIcon />
      </div>
    );

  return (
    <div className="bg-gray-900 rounded-md lg:rounded-none shadow-md relative h-full flex flex-col lg:flex-row lg:p-8 lg:space-x-12">
      <div className="header lg:basis-1/6">
        <div className="hidden lg:block lg:px-4 lg:ml-2 lg:-mt-2">
          <Logo />
        </div>
        <NavigationList
          navigation_list={playLists}
          isActive={isActive}
          onPlayListSelect={onPlayListSelect}
        />
      </div>
      <div className="body flex flex-1 overflow-y-auto w-full lg:basis-2/6 flex-col lg:space-y-6">
        <div className="hidden lg:block text-2xl font-semibold tracking-wide w-full p-4 pt-0">
          {isActive.title}
        </div>
        <SearchSong searchTerm={searchTerm} onHandleChange={handleChange} setSearchTerm={setSearchTerm}/>
        <SongList
          searchTerm={searchTerm}
          songsList={songs}
          onSongSelected={onSongSelected}
          selectedSong={currentSong}
        />
      </div>

      <div className="footer lg:basis-3/6">
        <div className="hidden lg:block w-full p-6 m-3"></div>
        <div className="hidden lg:block">
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
            onScrubEnd={onScrubEnd}
          />
        </div>
        {isPlayerMaximize ? (
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
            onScrubEnd={onScrubEnd}
          />
        ) : (
          Object.keys(currentSong).length !== 0 && (
            <MinimizePlayer
              onPlayerMaximize={setIsPlayerMaximize}
              currentSong={currentSong}
              isPlaying={isPlaying}
              onPlaying={setIsPlaying}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;

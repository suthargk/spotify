import React from "react";
import {initialNavigation as navigation_list} from './data/navigation'
import {songs} from './data/songs'
import NavigationList from "./components/Navigation/NavigationList";
import SearchSong from './components/Song/SearchSong'
import SongList from './components/Song/SongList'
import OngoingSong from "./components/OngoingSong/OngoingSong";



const App = () => {
  return (
    <div className="bg-gray-900 h-full rounded-md shadow-md">
      <NavigationList list={navigation_list}/>
      <SearchSong />
      <SongList songs={songs}/>
      <OngoingSong />
    </div>
  );
};

export default App;

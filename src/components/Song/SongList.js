import React from 'react';
import Song from './Song'
import LoadingIcon from '../../icon/LoadingIcon'
import {useSongs} from '../../hooks/useSongs'

const SongList = ({isActive, onSongSelected}) => {
    const {error, loading, data} = useSongs(isActive.id)
    if (loading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <LoadingIcon />
      </div>
    );
    return (
        <div className=''>
            <ul style={{height: "680px"}} className='overflow-y-scroll p-4 pt-0 space-y-4'>
               {data?.getSongs?.map(song => <Song onSongSelected={onSongSelected} key={song._id} song={song}/>)}
            </ul>
        </div>
    );
};

export default SongList;
import React from 'react';
import Song from './Song'
import {useSongs} from '../../hooks/useSongs'

const SongList = ({isActive}) => {
    const {error, loading, data} = useSongs(isActive.id)
    console.log(data)
    return (
        <div className=''>
            <ul style={{height: "650px"}} className='overflow-y-scroll p-4 pt-0 space-y-4'>
               {data?.getSongs?.map(song => <Song key={song._id} song={song}/>)}
            </ul>
        </div>
    );
};

export default SongList;
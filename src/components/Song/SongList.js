import React from 'react';
import Song from './Song'

const SongList = ({songs}) => {
    return (
        <div className='h-full'>
            <ul className='overflow-y-scroll p-4 pt-0 space-y-6 h-4/5'>
               {songs.map(song => <Song key={song.id} song={song}/>)}
            </ul>
        </div>
    );
};

export default SongList;
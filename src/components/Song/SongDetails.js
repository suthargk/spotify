import React, { useEffect} from "react";


const SongDetails = ({ artist, photo, title, songItemRef, songItemWidth }) => {
  console.log(songItemWidth)
  return (
    <div ref={songItemRef}  className="flex items-center space-x-4">
      <div className="">
        <img src={photo} className="h-14 w-14 rounded-full" alt={title} />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-100 text-base font-light capitalize tracking-wider">
          {songItemWidth < 415 && title.length > 25 ?  `${title.slice(0, 25)}...` : title}
        </span>
        <span className="text-gray-400 font-light text-sm capitalize">
          {artist}
        </span>
      </div>
    </div>
  );
};

export default SongDetails;

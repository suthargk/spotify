import React from "react";
import Navigation from "./Navigation";

const NavigationList = ({
  navigation_list: {data},
  onPlayListSelect,
  isActive,
}) => {

  return (
    <div className="h-20 overflow-hidden p-4 pb-0">
      <ul className="box-content pb-2 mt-4 space-x-2 h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full">
        {data?.getPlaylists?.map((playList) => (
          <Navigation
            key={playList.id}
            playList={playList}
            onPlayListSelect={onPlayListSelect}
            isActive={isActive}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavigationList;

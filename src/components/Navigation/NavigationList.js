import React, {memo} from "react";
import Navigation from "./Navigation";

const NavigationList = memo(({
  navigation_list: {data},
  onPlayListSelect,
  isActive,
}) => {
  return (
    <div className="h-20 p-4 pb-0 lg:h-auto">
      <ul className="box-content lg:box-border pb-2 mt-4 space-x-2 lg:space-x-0 lg:space-y-6 h-full overflow-x-scroll lg:overscroll-x-none overflow-y-hidden whitespace-nowrap w-full">
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
});

export default NavigationList;

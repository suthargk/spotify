import React from 'react';

const SongsNotFound = ({searchTerm}) => {
    return (
      <div className="flex justify-center items-center w-full h-full font-semibold">
          No result found for "{searchTerm}"
      </div>
    );
};

export default SongsNotFound;
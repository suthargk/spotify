import React from 'react';

const MaximizePlayer = ({isPlayerMaximize, onPlayerMaximize}) => {
    return (
        <div data-active={isPlayerMaximize} className='maximize-player h-full w-full bg-gray-800' onClick={() => onPlayerMaximize(false)}>
            
        </div>
    );
};

export default MaximizePlayer;
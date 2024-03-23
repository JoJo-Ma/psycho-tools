import React from 'react';
import { usePlayContext } from '../Contexts/PlayContext';

function PlayButtons() {
    const { playing, setPlaying, setCurrentCount } = usePlayContext();

    return (
        <div className="flex items-center">
            <button
                className="btn btn-primary m-1"
                onClick={() => setPlaying(true)}
                type="button"
                disabled={playing}
            >
                Play
            </button>
            <button
                className="btn btn-primary m-1"
                onClick={() => setPlaying(false)}
                type="button"
                disabled={!playing}
            >
                Pause
            </button>
            <button
                className="btn btn-primary m-1"
                onClick={() => setCurrentCount(0)}
                type="button"
            >
                Reset
            </button>
        </div>
    );
}

export default PlayButtons;

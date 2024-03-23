import React, {
    createContext, useContext, useState, useEffect, useMemo, useRef,
} from 'react';
import { useSettingsContext, SettingsContextValueType } from '../Contexts/SettingsContext';

const initialContextValue: PlayContextValueType = {
    playing: false,
    setPlaying: () => {},
    currentCount: 0,
    setCurrentCount: () => {},
};

const PlayContext = createContext<typeof initialContextValue>(initialContextValue);

export interface PlayContextValueType {
    playing: boolean;
    setPlaying: (value: boolean) => void;
    currentCount: number;
    setCurrentCount: (value: number) => void;
}

export function PlayContextProvider(
    { children }: { children: React.ReactNode },
) {
    const [playing, setPlaying] = useState<boolean>(false);
    const [currentCount, setCurrentCount] = useState<number>(0);
    const settingsContextValue: SettingsContextValueType = useSettingsContext();

    useEffect(() => {
        if (currentCount === settingsContextValue.count) {
            setPlaying(false);
            setCurrentCount(0);
        }
    }, [currentCount, settingsContextValue.count]);

    const state = useMemo(() => ({
        playing,
        setPlaying,
        currentCount,
        setCurrentCount,
    }), [playing, setPlaying, currentCount, setCurrentCount]);

    return (
        <PlayContext.Provider
            value={state}
        >
            {children}
        </PlayContext.Provider>
    );
}

export const usePlayContext = () => useContext(PlayContext);

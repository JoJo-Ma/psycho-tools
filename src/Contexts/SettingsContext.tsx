import React, {
    createContext, useContext, useState, useEffect, useMemo, useRef,
} from 'react';

const initialContextValue: SettingsContextValueType = {
    backgroundColor: '0xF8F8FF',
    setBackgroundColor: () => {},
    shapeColor: '0xff0000',
    setShapeColor: () => {},
    shapeType: 'circle',
    setShapeType: () => {},
    shapeSize: 100,
    setShapeSize: () => {},
    movement: 'left-right',
    setMovement: () => {},
    shapeSpeed: 1,
    setShapeSpeed: () => {},
    count: 15,
    setCount: () => {},
};

const SettingsContext = createContext<typeof initialContextValue>(initialContextValue);

export interface SettingsContextValueType {
    backgroundColor: string;
    setBackgroundColor: (value: string) => void;
    shapeColor: string;
    setShapeColor: (value: string) => void;
    shapeType: string;
    setShapeType: (value: string) => void;
    shapeSize: number;
    setShapeSize: (value: number) => void;
    movement: string;
    setMovement: (value: string) => void;
    shapeSpeed: number;
    setShapeSpeed: (value: number) => void;
    count: number;
    setCount: (value: number) => void;
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [backgroundColor, setBackgroundColor] = useState<string>('0xF8F8FF');
    const [shapeColor, setShapeColor] = useState<string>('0xff0000');
    const [shapeType, setShapeType] = useState<string>('circle');
    const [shapeSize, setShapeSize] = useState<number>(100);
    const [movement, setMovement] = useState<string>('left-right');
    const [shapeSpeed, setShapeSpeed] = useState<number>(20);
    const [count, setCount] = useState<number>(2);

    const state = useMemo(() => ({
        backgroundColor,
        setBackgroundColor,
        shapeColor,
        setShapeColor,
        shapeType,
        setShapeType,
        shapeSize,
        setShapeSize,
        movement,
        setMovement,
        shapeSpeed,
        setShapeSpeed,
        count,
        setCount,
    }), [
        backgroundColor,
        setBackgroundColor,
        shapeColor,
        setShapeColor,
        shapeType,
        setShapeType,
        shapeSize,
        setShapeSize,
        movement,
        setMovement,
        shapeSpeed,
        setShapeSpeed,
        count,
        setCount,
    ]);

    return (
        <SettingsContext.Provider
            value={state}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettingsContext = () => useContext(SettingsContext);

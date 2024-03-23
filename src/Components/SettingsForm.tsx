import React, { useState } from 'react';
import { useSettingsContext, SettingsContextValueType } from '../Contexts/SettingsContext';

function SettingsForm() {
    const {
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
    }: SettingsContextValueType = useSettingsContext();

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Settings</h1>
            <div className="flex items-center">
                <label htmlFor="backgroundColor" className="mr-2">Background Color:</label>
                <input
                    type="color"
                    id="backgroundColor"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="shapeColor" className="mr-2">Shape Color:</label>
                <input
                    type="color"
                    id="shapeColor"
                    value={shapeColor}
                    onChange={(e) => setShapeColor(e.target.value)}
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="shapeType" className="mr-2">Shape Type:</label>
                <select
                    id="shapeType"
                    value={shapeType}
                    onChange={(e) => setShapeType(e.target.value)}
                >
                    <option value="circle">Circle</option>
                    <option value="rectangle">Rectangle</option>
                </select>
            </div>
            <div className="flex items-center">
                <label htmlFor="shapeSize" className="mr-2">Shape Size:</label>
                <input
                    type="number"
                    id="shapeSize"
                    value={shapeSize}
                    onChange={(e) => setShapeSize(Number(e.target.value))}
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="movement" className="mr-2">Movement:</label>
                <select
                    id="movement"
                    value={movement}
                    onChange={(e) => setMovement(e.target.value)}
                >
                    <option value="left-right">Left-Right</option>
                    <option value="up-down">Up-Down</option>
                </select>
            </div>
            <div className="flex items-center">
                <label htmlFor="shapeSpeed" className="mr-2">Shape Speed:</label>
                <input
                    type="number"
                    id="shapeSpeed"
                    value={shapeSpeed}
                    onChange={(e) => setShapeSpeed(Number(e.target.value))}
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="count" className="mr-2">Count:</label>
                <input
                    type="number"
                    id="count"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
            </div>
        </div>
    );
}

export default SettingsForm;

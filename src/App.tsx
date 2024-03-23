import React, { useState } from 'react';
import './App.css';
import {Stage} from '@pixi/react';
import * as PIXI from 'pixi.js';
import Canvas from './Components/Canvas';
import SettingsForm from './Components/SettingsForm';
import PlayButtons from './Components/PlayButtons';
import { SettingsProvider } from './Contexts/SettingsContext';
import { PlayContextProvider } from './Contexts/PlayContext';

function App() {
    return (
        <div className="App flex items-center flex-col">
            <SettingsProvider>
                <PlayContextProvider>
                    <SettingsForm />
                    <PlayButtons />
                    <Canvas />
                </PlayContextProvider>
            </SettingsProvider>
        </div>
    );
}

export default App;

// App.jsx
import React, { useState, useEffect } from 'react';
import SettingsModal from './components/SettingsModal';
import './index.css'; //Tailwind css
import tokyoimg from './assets/tokyo.jpeg'
import newyork from './assets/newyork.jpg'
import './fonts/orbit'
import './fonts/cinzel.jsx'
const themes = [
  { name: 'Tokyo Sakura', backgroundImage: `url(${tokyoimg})` },
  { name: 'New York Night', backgroundImage:`url(${newyork})` },
  { name: 'Parisian Sunset', backgroundImage: 'url(/path-to-parisian-sunset.jpg)' },
  // Add more themes as needed
];

const App = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0].name);
  const currentBackgroundImage = themes.find(theme => theme.name === currentTheme).backgroundImage;

  useEffect(() => {
    let interval = null;
    
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(25 * 60);
    setIsActive(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
     <div className="w-full w-screen min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: currentBackgroundImage }}>
      <div className="text-center">
        <h1 className="headingp text-4xl font-extrabold text-white drop-shadow-lg">Pomodoro Timer</h1>
        
          <div className=" timer text-6xl text-white font-mono">{formatTime()}</div>
          <div className="flex space-x-4 justify-center mt-8">
            <button className="bg-transparent font-m bg-white text-gray-800  py-2 px-3  rounded-lg" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
            <button className="reset-button" onClick={resetTimer}>Reset</button>
            <button className="settings-button absolute top-0 right-0 m-4w" onClick={openSettings}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"fill="#D1D5DB" stroke="#D1D5DB"/></svg></button>
          </div>
        
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={closeSettings}
          onThemeChange={handleThemeChange}
          themes={themes}
          currentTheme={currentTheme}
        />
      </div>
    </div>
  );
};

export default App;

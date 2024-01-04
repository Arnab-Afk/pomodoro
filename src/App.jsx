// App.jsx
import React, { useState, useEffect } from 'react';
import SettingsModal from './components/SettingsModal';
import './index.css'; //Tailwind css
import tokyoimg from './assets/tokyo.jpeg'
import newyork from './assets/newyork.jpg'
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
     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: currentBackgroundImage }}>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">Pomodoro Timer</h1>
        <div className="bg-white bg-opacity-0 backdrop-blur-md p-6 mt-8 rounded-lg ">
          <div className="text-6xl text-white font-mono">{formatTime()}</div>
          <div className="flex space-x-4 justify-center mt-8">
            <button className="start-button" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
            <button className="reset-button" onClick={resetTimer}>Reset</button>
            <button className="settings-button" onClick={openSettings}>Settings</button>
          </div>
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

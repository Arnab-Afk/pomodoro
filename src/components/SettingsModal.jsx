// SettingsModal.jsx
import React from 'react';

const SettingsModal = ({ isOpen, onClose, onThemeChange, themes, currentTheme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <div>
          <label htmlFor="theme-select" className="block text-lg">Select theme:</label>
          <select
            id="theme-select"
            value={currentTheme}
            onChange={onThemeChange}
            className="mt-1 block w-full"
          >
            {themes.map(theme => (
              <option key={theme.name} value={theme.name}>{theme.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

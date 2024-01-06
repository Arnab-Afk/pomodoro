// SettingsModal.jsx
import React from 'react';
import '../index.css';

const SettingsModal = ({ isOpen, onClose, onThemeChange, themes, currentTheme }) => {
  if (!isOpen) return null;

  const handleSelectWorld = (theme) => {
    onThemeChange(theme); // Assuming onThemeChange expects an object with theme details
    onClose(); // Close the modal after selection
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="p-8 rounded-lg shadow-lg space-y-4 glassmorphism">
        <h2 className="text-xl font-bold text-white">Pick your Ambient Mode world</h2>
        <div className="grid-container">
          {themes.map((theme) => (
            <div
              key={theme.name}
              className={`grid-item ${currentTheme.name === theme.name ? 'selected' : ''}`}
              onClick={() => handleSelectWorld(theme)}
            >
              <img src={theme.image} alt={theme.name} className="grid-image" />
              <div className="grid-item-name">{theme.name}</div>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="save-button">Save</button>
      </div>
    </div>
  );
};

export default SettingsModal;

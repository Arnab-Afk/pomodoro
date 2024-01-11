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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
              >
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105'
                />
                
              </div>
            ))}
          </div>
        <button onClick={onClose} className="save-button">Save</button>
      </div>
    </div>
  );
};

export default SettingsModal;

// SettingsModal.jsx
import React from 'react';
import '../index.css';

const SettingsModal = ({ isOpen, onClose, onThemeChange, themes, currentTheme }) => {
  if (!isOpen) return null;

  const handleSelectWorld = (theme) => {
    onThemeChange(theme); // Assuming onThemeChange expects an object with theme details
    onClose(); // Close the modal after selection
  };
const items = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
  ];

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
                <div className='flex items-center justify-center'>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => window.open(link, '_blank')}
                  >
                    button
                  </button>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => window.open(link, '_blank')}
                  >
                    button
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default SettingsModal;

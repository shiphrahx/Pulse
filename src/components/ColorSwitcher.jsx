import { useState } from 'react';
import { FaPalette, FaTimes } from 'react-icons/fa';
import { useColor, colorSchemes } from '../context/ColorContext';

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorScheme, changeColor } = useColor();

  const colorOptions = [
    { key: 'blue', color: '#0ea5e9', name: 'Blue' },
    { key: 'purple', color: '#a855f7', name: 'Purple' },
    { key: 'green', color: '#10b981', name: 'Green' },
    { key: 'orange', color: '#f97316', name: 'Orange' },
    { key: 'pink', color: '#ec4899', name: 'Pink' },
    { key: 'red', color: '#ef4444', name: 'Red' },
    { key: 'teal', color: '#14b8a6', name: 'Teal' },
    { key: 'yellow', color: '#eab308', name: 'Yellow' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bottom-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus-outline"
        style={{
          backgroundColor: colorSchemes[colorScheme].primary,
          color: 'white'
        }}
        aria-label="Color switcher"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes size={20} /> : <FaPalette size={20} />}
      </button>

      {/* Color Picker Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed right-6 bottom-24 z-50 card p-6 w-72 animate-slide-up">
            <h3 className="text-lg font-display font-bold mb-4">
              Choose Accent Color
            </h3>

            {/* Color Grid */}
            <div className="grid grid-cols-4 gap-3">
              {colorOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => {
                    changeColor(option.key);
                    setIsOpen(false);
                  }}
                  className={`
                    relative w-full aspect-square rounded-lg transition-all duration-200
                    hover:scale-110 focus-outline
                    ${colorScheme === option.key ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110' : ''}
                  `}
                  style={{ backgroundColor: option.color }}
                  aria-label={`${option.name} color scheme`}
                  title={option.name}
                >
                  {colorScheme === option.key && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 text-center">
              Click a color to apply
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ColorSwitcher;

import { useState } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import Button from './Button';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, themes, setTheme, getThemeNames } = useThemeStore();

  const themeNames = getThemeNames();

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const getThemeColor = (themeName) => {
    return themes[themeName]?.primary[500] || '#3b82f6';
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">Tone màu</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Chọn tone màu</h3>
            <div className="grid grid-cols-2 gap-2">
              {themeNames.map((themeName) => {
                const theme = themes[themeName];
                const isActive = currentTheme === themeName;
                
                return (
                  <button
                    key={themeName}
                    onClick={() => handleThemeChange(themeName)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      isActive 
                        ? 'border-primary-600 bg-primary-50' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: getThemeColor(themeName) }}
                      />
                      <span className={`text-sm font-medium ${
                        isActive ? 'text-primary-700' : 'text-gray-700'
                      }`}>
                        {theme.name}
                      </span>
                    </div>
                    {isActive && (
                      <div className="mt-1 text-xs text-primary-600">
                        Đang sử dụng
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher; 
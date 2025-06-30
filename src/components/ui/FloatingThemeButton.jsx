import { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

const FloatingThemeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, themes, setTheme, getThemeNames } = useThemeStore();
  const themeNames = getThemeNames();
  
  console.log('All themes:', themes);
  console.log('Theme names:', themeNames);
  console.log('Current theme:', currentTheme);

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const getThemeColor = (themeName) => {
    return themes[themeName]?.primary[500] || '#3b82f6';
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center floating-button ${
            isOpen 
              ? 'bg-gray-800 text-white scale-110' 
              : 'bg-dynamic-primary text-white hover:bg-dynamic-primary hover:scale-105'
          }`}
          title="Tùy chỉnh tone màu"
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Palette className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>

      {/* Theme Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:bottom-28 sm:left-6 z-50 ">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 sm:p-4 w-56 sm:w-72 xl:w-96 theme-panel-enter-active">
            <div className="mb-3 sm:mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 sm:mb-2">🎨 Chọn tone màu</h3>
              <p className="text-xs text-gray-500">Tùy chỉnh giao diện theo sở thích của bạn</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {themeNames.map((themeName) => {
                const theme = themes[themeName];
                const isActive = currentTheme === themeName;
                console.log(`Theme ${themeName}:`, theme);
                
                // Kiểm tra an toàn cho theme object
                if (!theme || !theme.name) {
                  console.log(`Theme ${themeName} is invalid:`, theme);
                  return null;
                }
                
                return (
                  <button
                    key={themeName}
                    onClick={() => handleThemeChange(themeName)}
                    className={`p-2 sm:p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                      isActive 
                        ? 'border-dynamic-primary bg-primary-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300 shadow-sm"
                        style={{ backgroundColor: getThemeColor(themeName) }}
                      />
                      <span className={`text-xs sm:text-sm font-medium ${
                        isActive ? 'text-dynamic-primary' : 'text-gray-700'
                      }`}>
                        {theme.name}
                      </span>
                    </div>
                    {isActive && (
                      <div className="mt-1 text-xs text-dynamic-primary font-medium">
                        ✓ Đang sử dụng
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Current Theme Info */}
            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Tone hiện tại:</span>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full shadow-sm"
                    style={{ backgroundColor: getThemeColor(currentTheme) }}
                  />
                  <span className="text-xs font-medium text-gray-700">
                    {themes[currentTheme]?.name || 'Không xác định'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Tip */}
            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                💡 Tip: Thay đổi sẽ được lưu tự động
              </p>
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
    </>
  );
};

export default FloatingThemeButton; 
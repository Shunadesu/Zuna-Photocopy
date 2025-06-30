import { useThemeStore } from '../../store/useThemeStore';

const ThemePreview = () => {
  const { themes, getThemeNames } = useThemeStore();
  const themeNames = getThemeNames();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview các tone màu</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {themeNames.map((themeName) => {
          const theme = themes[themeName];
          
          if (!theme || !theme.primary || !theme.name) {
            return null;
          }
          
          return (
            <div key={themeName} className="text-center">
              <div className="mb-2">
                <div 
                  className="w-12 h-12 rounded-lg mx-auto shadow-md"
                  style={{ backgroundColor: theme.primary[500] || '#3b82f6' }}
                />
              </div>
              <div className="text-xs font-medium text-gray-700">{theme.name}</div>
              <div className="text-xs text-gray-500">{theme.primary[500] || '#3b82f6'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePreview; 
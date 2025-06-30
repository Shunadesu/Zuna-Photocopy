import { useEffect, useState } from 'react';

const PageLoader = ({ onDone }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 100) {
      const timeout = setTimeout(() => setPercent(p => Math.min(100, p + Math.floor(Math.random() * 10) + 5)), 20);
      return () => clearTimeout(timeout);
    } else {
      const doneTimeout = setTimeout(() => onDone && onDone(), 300);
      return () => clearTimeout(doneTimeout);
    }
  }, [percent, onDone]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all">
      <div className="w-24 h-24 flex items-center justify-center mb-4">
        <svg className="animate-spin h-12 w-12 text-primary-600" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
      </div>
      <div className="text-3xl font-bold text-primary-600">{percent}%</div>
      <div className="mt-2 text-gray-400">Đang tải trang chủ...</div>
    </div>
  );
};

export default PageLoader; 
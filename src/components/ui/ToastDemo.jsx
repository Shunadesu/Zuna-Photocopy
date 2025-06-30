import React from 'react';
import toast from 'react-hot-toast';
import Button from './Button';

const ToastDemo = () => {
  const showSuccessToast = () => {
    toast.success('Thao tác thành công!');
  };

  const showErrorToast = () => {
    toast.error('Có lỗi xảy ra, vui lòng thử lại!');
  };

  const showLoadingToast = () => {
    toast.loading('Đang xử lý...', {
      duration: 3000,
    });
  };

  const showCustomToast = () => {
    toast('Đây là thông báo tùy chỉnh!', {
      duration: 4000,
      position: 'bottom-center',
      style: {
        background: '#363636',
        color: '#fff',
      },
    });
  };

  const showPromiseToast = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('Thành công!') : reject('Thất bại!');
      }, 2000);
    });

    toast.promise(
      promise,
      {
        loading: 'Đang xử lý...',
        success: (data) => `Hoàn thành: ${data}`,
        error: (err) => `Lỗi: ${err}`,
      }
    );
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Toast Notifications Demo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Button onClick={showSuccessToast} className="bg-green-600 hover:bg-green-700">
          Success Toast
        </Button>
        
        <Button onClick={showErrorToast} className="bg-red-600 hover:bg-red-700">
          Error Toast
        </Button>
        
        <Button onClick={showLoadingToast} className="bg-blue-600 hover:bg-blue-700">
          Loading Toast
        </Button>
        
        <Button onClick={showCustomToast} className="bg-purple-600 hover:bg-purple-700">
          Custom Toast
        </Button>
        
        <Button onClick={showPromiseToast} className="bg-orange-600 hover:bg-orange-700">
          Promise Toast
        </Button>
      </div>
    </div>
  );
};

export default ToastDemo; 
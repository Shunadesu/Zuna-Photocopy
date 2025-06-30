import { useCartStore } from '../../store/useStore';
import { Link } from 'react-router-dom';
import { X, ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, removeItem, getTotalPrice } = useCartStore();

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0  opacity-100 shadow-2xl' : 'translate-x-full  opacity-0 shadow-none'}
        `}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6 text-primary-600" />
            <span className="text-lg font-bold text-gray-900">Giỏ hàng</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-16">
              Giỏ hàng của bạn đang trống.
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4 last:border-b-0">
                <img
                  src={item.image || (item.images && item.images[0])}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 line-clamp-1">{item.name}</div>
                  <div className="text-sm text-gray-500">SL: {item.quantity}</div>
                  <div className="text-sm text-primary-600 font-bold">
                    {item.price.toLocaleString('vi-VN')}đ
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500"
                  title="Xóa khỏi giỏ"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 font-medium">Tổng cộng:</span>
            <span className="text-xl font-bold text-primary-600">
              {getTotalPrice().toLocaleString('vi-VN')}đ
            </span>
          </div>
          <Link to="/cart" onClick={onClose}>
            <Button className="w-full text-lg py-3">Tiến hành thanh toán</Button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer; 
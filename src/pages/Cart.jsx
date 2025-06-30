import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/useStore';
import CartItem from '../components/cart/CartItem';
import Button from '../components/ui/Button';

const Cart = () => {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Giỏ hàng trống</h2>
          <p className="text-gray-600 mb-8">
            Bạn chưa có sản phẩm nào trong giỏ hàng.
          </p>
          <Link to="/products">
            <Button>
              Tiếp tục mua sắm
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Giỏ hàng</h1>
            <p className="text-gray-600 mt-1">
              {getTotalItems()} sản phẩm trong giỏ hàng
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Tiếp tục mua sắm</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Sản phẩm</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200">
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center space-x-2"
              >
                <Trash2 className="h-4 w-4" />
                <span>Xóa tất cả</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tóm tắt đơn hàng</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính:</span>
                <span className="font-medium">{getTotalPrice().toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phí vận chuyển:</span>
                <span className="font-medium">Miễn phí</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Thuế VAT:</span>
                <span className="font-medium">{(getTotalPrice() * 0.1).toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Tổng cộng:</span>
                  <span className="text-lg font-bold text-primary-600">
                    {(getTotalPrice() * 1.1).toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              loading={isCheckingOut}
              disabled={isCheckingOut}
              className="w-full"
              size="lg"
            >
              {isCheckingOut ? 'Đang xử lý...' : 'Tiến hành đặt hàng'}
            </Button>

            <div className="mt-4 text-sm text-gray-500 text-center">
              Bằng việc đặt hàng, bạn đồng ý với{' '}
              <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                điều khoản sử dụng
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-6 mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Thông tin bổ sung</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Giao hàng miễn phí trong nội thành TP.HCM</li>
              <li>• Bảo hành chính hãng từ 12-36 tháng</li>
              <li>• Hỗ trợ lắp đặt và hướng dẫn sử dụng</li>
              <li>• Đổi trả trong vòng 7 ngày</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 
import { Minus, Plus, Trash2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useStore';
import { isRentProduct, isBuyProduct, getProductSlug, formatPrice } from '../../utils/helpers';
import Button from '../ui/Button';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const rentProduct = isRentProduct(item);
  const buyProduct = isBuyProduct(item);

  return (
    <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          {rentProduct && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Calendar className="h-3 w-3 mr-1" />
              Thuê
            </span>
          )}
          {buyProduct && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Mua
            </span>
          )}
        </div>
        
        <Link to={`/product/${getProductSlug(item)}`} className="block">
          <h3 className="text-lg font-medium text-gray-900 truncate hover:text-primary-600 transition-colors">
            {item.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500">{item.category}</p>
        
        {/* Rent period for rent products */}
        {rentProduct && item.rentPeriod && (
          <p className="text-sm text-blue-600 mt-1">
            Thời hạn: {item.rentPeriod}
          </p>
        )}
        
        <div className="flex items-center space-x-2 mt-1">
          {item.originalPrice && item.originalPrice > item.price && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(item.originalPrice)}
            </span>
          )}
          <span className="text-lg font-bold text-primary-600">
            {formatPrice(item.price)}
            {rentProduct && <span className="text-sm text-gray-500">/tháng</span>}
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-12 text-center font-medium">
          {item.quantity}
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={item.stock && item.quantity >= item.stock}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="text-right">
        <div className="text-lg font-bold text-gray-900">
          {formatPrice(item.price * item.quantity)}
          {rentProduct && <span className="text-sm text-gray-500">/tháng</span>}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemove}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem; 
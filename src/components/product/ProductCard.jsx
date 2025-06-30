import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Heart, Calendar, CheckCircle } from 'lucide-react';
import { useCartStore, useAuthStore } from '../../store/useStore';
import { isRentProduct, isBuyProduct, getProductSlug, formatPrice, formatStockStatus } from '../../utils/helpers';
import { getProductUrl } from '../../utils/productMapping';
import Button from '../ui/Button';
import QuickView from './QuickView';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addItem } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast.error('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
      return;
    }
    
    addItem(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    setShowQuickView(true);
  };

  const rentProduct = isRentProduct(product);
  const buyProduct = isBuyProduct(product);
  const stockStatus = formatStockStatus(product.stock, rentProduct);

  return (
    <>
      <div className="product-card my-4 mx-2 group h-[480px] md:h-[520px] sm:h-[540px]">
        {/* Image Container - Fixed height */}
        <div className="product-card-image">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay with Quick Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
              <button
                onClick={handleQuickView}
                className="p-2 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                title="Xem nhanh"
              >
                <Eye className="h-4 w-4" />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-2 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                title="Thêm vào giỏ hàng"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
              <button
              onClick={handleWishlist}
              className={`p-2 rounded-full transition-colors ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart className="h-4 w-4" fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            </div>
          </div>
        
          {/* Product Type Badge */}
          {rentProduct && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Thuê
            </div>
          )}
          {buyProduct && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
              Mua
            </div>
          )}
        </div>
        
        {/* Content Container - Flex grow to fill remaining space */}
        <div className="product-card-content flex flex-col h-full">
          <div className="flex flex-col flex-grow">
            {/* Category and New Badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              {product.isNew && (
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Mới
                </span>
              )}
            </div>
            
            {/* Product Title */}
            <Link to={getProductUrl(product)} className="block">
              <h3 className="product-card-title">
                {product.name}
              </h3>
            </Link>
            
            {/* Product Description */}
            <p className="product-card-description">
              {product.description}
            </p>

            {/* Features for rent/buy products */}
            {product.features && (
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-800"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{product.features.length - 3} tính năng khác
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Rent period for rent products */}
            {rentProduct && product.rentPeriod && (
              <div className="mb-3 p-2 bg-blue-50 rounded-lg">
                <div className="flex items-center text-sm text-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Thời hạn thuê: {product.rentPeriod}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Price and Action Button luôn ở đáy */}
          <div className="mt-auto">
            <div className="product-card-price">
              <div className="flex flex-col">
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-gray-400 line-through text-sm">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-lg font-bold text-primary-600">
                  {formatPrice(product.price)}
                  {rentProduct && <span className="text-sm text-gray-500">/tháng</span>}
                </span>
              </div>
              
              <Button
                onClick={handleAddToCart}
                size="sm"
                className="flex items-center space-x-1"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>{rentProduct ? 'Thuê' : 'Thêm'}</span>
              </Button>
            </div>
            
            {/* Stock Status luôn ở dưới cùng */}
            {stockStatus.available && product.stock <= 5 && (
              <p className={`text-sm mt-2 ${stockStatus.color}`}>
                {stockStatus.text}
              </p>
            )}
            
            {!stockStatus.available && (
              <p className={`text-sm mt-2 ${stockStatus.color}`}>
                {stockStatus.text}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickView
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
};

export default ProductCard; 
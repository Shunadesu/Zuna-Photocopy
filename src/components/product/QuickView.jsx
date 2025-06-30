import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, Clock, Calendar, CheckCircle, Eye } from 'lucide-react';
import { useCartStore } from '../../store/useStore';
import { isRentProduct, isBuyProduct, getProductSlug, formatPrice } from '../../utils/helpers';
import { getProductUrl } from '../../utils/productMapping';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const QuickView = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  // Sử dụng ảnh từ product nếu có nhiều ảnh, hoặc tạo ảnh đa dạng
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [
        product.image,
        // Tạo các ảnh khác nhau bằng cách thêm tham số
        `${product.image}?v=1`,
        `${product.image}?v=2`, 
        `${product.image}?v=3`
      ];

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
    onClose();
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const rentProduct = isRentProduct(product);
  const buyProduct = isBuyProduct(product);

  const features = [
    { icon: Truck, text: 'Giao hàng miễn phí' },
    { icon: Shield, text: 'Bảo hành chính hãng' },
    { icon: Clock, text: 'Hỗ trợ 24/7' }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            {/* Category Badge */}
            <div className="mb-3">
              {rentProduct && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Calendar className="h-4 w-4 mr-1" />
                  Dịch vụ thuê máy
                </span>
              )}
              {buyProduct && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Mua trực tiếp
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-500">(4.5/5)</span>
              <span className="text-sm text-gray-500">• 12 đánh giá</span>
            </div>
          </div>

          {/* Product Features */}
          {product.features && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Tính năng nổi bật</h4>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rent Period for Rent Products */}
          {rentProduct && product.rentPeriod && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-blue-900">Thời hạn thuê</h4>
                  <p className="text-sm text-blue-700">{product.rentPeriod}</p>
                </div>
              </div>
            </div>
          )}

          {/* Price */}
          <div className="space-y-2">
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                  {rentProduct && <span className="text-sm text-gray-500">/tháng</span>}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                  {rentProduct && <span className="text-sm">/tháng</span>}
                </span>
                {product.discount && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    -{product.discount}%
                  </span>
                )}
              </div>
            )}
            {(!product.originalPrice || product.originalPrice <= product.price) && (
              <span className="text-2xl font-bold text-primary-600">
                {formatPrice(product.price)}
                {rentProduct && <span className="text-sm text-gray-500">/tháng</span>}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="space-y-2">
            {product.stock > 0 ? (
              <p className="text-green-600 text-sm">
                ✓ Còn {product.stock} {rentProduct ? 'máy' : 'sản phẩm'} trong kho
              </p>
            ) : (
              <p className="text-red-600 text-sm">
                ✗ {rentProduct ? 'Hết máy thuê' : 'Hết hàng'}
              </p>
            )}
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Số lượng
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-12 text-center font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                disabled={product.stock && quantity >= product.stock}
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>{rentProduct ? 'Thuê ngay' : 'Thêm vào giỏ hàng'}</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleWishlist}
              className="px-4"
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
            </Button>
          </div>

          {/* View Details Link */}
          <div className="text-center">
            <Link
              to={getProductUrl(product)}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              onClick={onClose}
            >
              <Eye className="h-4 w-4 mr-2" />
              Xem chi tiết sản phẩm
            </Link>
          </div>

          {/* Services */}
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickView; 
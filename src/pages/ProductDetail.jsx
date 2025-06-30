import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield, Clock, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useCartStore } from '../store/useStore';
import { Button, SEO } from '../components';
import { allProducts } from '../data/allProducts';


const ProductDetail = () => {
  const { slug, type } = useParams();
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Tìm sản phẩm theo slug
    const foundProduct = allProducts.find(p => p.slug === slug);
    setProduct(foundProduct);
    setLoading(false);
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity
      });
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy sản phẩm</h1>
          <p className="text-gray-600 mb-8">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/" className="btn-primary">
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const isRentProduct = product.type === 'rent';

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        keywords={`${product.name}, máy photocopy, ${isRentProduct ? 'thuê máy' : 'bán máy'}, Zuna Photocopy`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-700 hover:text-primary-600">
                Trang chủ
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/products" className="text-gray-700 hover:text-primary-600">
                  Sản phẩm
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
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
            {/* Product Type Badge */}
            <div className="flex items-center space-x-2">
              {isRentProduct ? (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Dịch vụ thuê máy
                </span>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Mua trực tiếp
                </span>
              )}
              {product.isNew && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Mới
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.rating}/5)</span>
              <span className="text-sm text-gray-500">• {product.reviewCount} đánh giá</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary-600">
                    {product.price.toLocaleString('vi-VN')}đ
                    {isRentProduct && <span className="text-sm text-gray-500">/tháng</span>}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}đ
                    {isRentProduct && <span className="text-sm">/tháng</span>}
                  </span>
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              )}
              {(!product.originalPrice || product.originalPrice <= product.price) && (
                <span className="text-3xl font-bold text-primary-600">
                  {product.price.toLocaleString('vi-VN')}đ
                  {isRentProduct && <span className="text-sm text-gray-500">/tháng</span>}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="space-y-2">
              {product.stock > 0 ? (
                <p className="text-green-600 text-sm">
                  ✓ Còn {product.stock} {isRentProduct ? 'máy' : 'sản phẩm'} trong kho
                </p>
              ) : (
                <p className="text-red-600 text-sm">
                  ✗ {isRentProduct ? 'Hết máy thuê' : 'Hết hàng'}
                </p>
              )}
            </div>

            {/* Rent Period for Rent Products */}
            {isRentProduct && product.rentPeriod && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Thời hạn thuê</h4>
                    <p className="text-sm text-blue-700">{product.rentPeriod}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Số lượng
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
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
                <span>{isRentProduct ? 'Thuê ngay' : 'Thêm vào giỏ hàng'}</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="px-4"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigator.share({ title: product.name, url: window.location.href })}
                className="px-4"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            {product.features && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tính năng nổi bật</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-gray-600">Giao hàng miễn phí</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-gray-600">Bảo hành chính hãng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-gray-600">Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16">
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin chi tiết</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mô tả sản phẩm</h3>
                <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông số kỹ thuật</h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail; 
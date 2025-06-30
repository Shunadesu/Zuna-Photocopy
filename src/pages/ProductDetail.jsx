import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield, Clock, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useCartStore } from '../store/useStore';
import { getProductName } from '../utils/productMapping';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';

const ProductDetail = () => {
  const { slug, type } = useParams();
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Xác định loại sản phẩm từ URL
  const getProductType = () => {
    if (type === 'ban-may-photo') return 'buy';
    if (type === 'thue-may-photo') return 'rent';
    return null;
  };

  // Mock data cho tất cả sản phẩm với slug mới
  const allProducts = [
    // Sản phẩm bán
    {
      id: 101,
      slug: 'may-photocopy-canon-ir-adv-c3530',
      name: 'Máy Photocopy Canon IR-ADV C3530',
      description: 'Máy photocopy đa chức năng, tốc độ 30 trang/phút, in màu chất lượng cao',
      longDescription: 'Máy photocopy Canon IR-ADV C3530 là sự lựa chọn hoàn hảo cho văn phòng và doanh nghiệp. Với tốc độ in 30 trang/phút, khả năng in màu chất lượng cao, scan và fax tích hợp, máy đáp ứng mọi nhu cầu in ấn hiện đại.',
      price: 25000000,
      originalPrice: 28000000,
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'ricoh-cong-nghiep',
      stock: 3,
      discount: 10,
      isNew: true,
      type: 'buy',
      features: [
        'Tốc độ in: 30 trang/phút',
        'Khổ giấy: A4, A3',
        'In màu chất lượng cao',
        'Scan và Fax tích hợp',
        'Kết nối WiFi',
        'Bảo hành 12 tháng'
      ],
      specifications: {
        'Tốc độ in': '30 trang/phút',
        'Khổ giấy': 'A4, A3',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bộ nhớ': '2GB',
        'Kết nối': 'USB, WiFi, Ethernet',
        'Kích thước': '650 x 750 x 850 mm',
        'Trọng lượng': '85 kg'
      },
      rating: 4.8,
      reviewCount: 24
    },
    {
      id: 102,
      slug: 'may-photocopy-ricoh-mp-c3004',
      name: 'Máy Photocopy Ricoh MP C3004',
      description: 'Máy photocopy màu đa chức năng, tốc độ 30 trang/phút',
      longDescription: 'Máy photocopy Ricoh MP C3004 với công nghệ in màu tiên tiến, cho phép in ấn chất lượng cao với tốc độ nhanh. Phù hợp cho văn phòng cần in màu thường xuyên.',
      price: 35000000,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'ricoh-mau',
      stock: 2,
      isNew: true,
      type: 'buy',
      features: [
        'In màu chất lượng cao',
        'Tốc độ 30 trang/phút',
        'Scan đa chức năng',
        'Bảo hành 24 tháng'
      ],
      specifications: {
        'Tốc độ in': '30 trang/phút',
        'Khổ giấy': 'A4, A3',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bộ nhớ': '4GB',
        'Kết nối': 'USB, WiFi, Ethernet',
        'Kích thước': '680 x 750 x 850 mm',
        'Trọng lượng': '90 kg'
      },
      rating: 4.9,
      reviewCount: 18
    },
    {
      id: 103,
      slug: 'may-photocopy-canon-pixma-ts8320',
      name: 'Máy Photocopy Canon PIXMA TS8320',
      description: 'Máy in phun màu đa chức năng, in ảnh chất lượng cao',
      longDescription: 'Máy in phun màu Canon PIXMA TS8320 với công nghệ in ảnh tiên tiến, cho phép in ảnh chất lượng cao và đa chức năng scan, copy.',
      price: 7500000,
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'konica-mau',
      stock: 6,
      isNew: true,
      type: 'buy',
      features: [
        'In ảnh chất lượng cao',
        'Scan đa chức năng',
        'Kết nối WiFi',
        'Bảo hành 12 tháng'
      ],
      specifications: {
        'Tốc độ in': '15 trang/phút',
        'Khổ giấy': 'A4, A5',
        'Độ phân giải': '4800 x 2400 dpi',
        'Bộ nhớ': '1GB',
        'Kết nối': 'USB, WiFi',
        'Kích thước': '400 x 300 x 150 mm',
        'Trọng lượng': '8 kg'
      },
      rating: 4.7,
      reviewCount: 12
    },
    {
      id: 104,
      slug: 'may-photocopy-hp-laserjet-pro-m404n',
      name: 'Máy Photocopy HP LaserJet Pro M404n',
      description: 'Máy in laser đơn sắc, tốc độ cao, tiết kiệm mực',
      longDescription: 'Máy in laser HP LaserJet Pro M404n với công nghệ in laser tiên tiến, tốc độ cao và tiết kiệm mực, phù hợp cho văn phòng cần in số lượng lớn.',
      price: 8500000,
      originalPrice: 9500000,
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'ricoh-van-phong',
      stock: 8,
      discount: 10,
      isNew: false,
      type: 'buy',
      features: [
        'Tốc độ in cao',
        'Tiết kiệm mực',
        'Kết nối mạng',
        'Bảo hành 12 tháng'
      ],
      specifications: {
        'Tốc độ in': '40 trang/phút',
        'Khổ giấy': 'A4',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bộ nhớ': '256MB',
        'Kết nối': 'USB, Ethernet',
        'Kích thước': '400 x 350 x 250 mm',
        'Trọng lượng': '12 kg'
      },
      rating: 4.6,
      reviewCount: 28
    },
    {
      id: 105,
      slug: 'may-photocopy-brother-hl-l2350dw',
      name: 'Máy Photocopy Brother HL-L2350DW',
      description: 'Máy in laser đơn sắc, kết nối WiFi, tiết kiệm năng lượng',
      longDescription: 'Máy in laser Brother HL-L2350DW với kết nối WiFi tiện lợi và tính năng tiết kiệm năng lượng, phù hợp cho văn phòng nhỏ và gia đình.',
      price: 6500000,
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'kho-lon',
      stock: 15,
      isNew: false,
      type: 'buy',
      features: [
        'Kết nối WiFi',
        'Tiết kiệm năng lượng',
        'Tốc độ in nhanh',
        'Bảo hành 12 tháng'
      ],
      specifications: {
        'Tốc độ in': '32 trang/phút',
        'Khổ giấy': 'A4',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bộ nhớ': '32MB',
        'Kết nối': 'USB, WiFi',
        'Kích thước': '350 x 300 x 200 mm',
        'Trọng lượng': '10 kg'
      },
      rating: 4.5,
      reviewCount: 35
    },
    {
      id: 106,
      slug: 'may-photocopy-epson-ecotank-l3210',
      name: 'Máy Photocopy Epson EcoTank L3210',
      description: 'Máy in phun màu, hệ thống bình mực liền, tiết kiệm chi phí',
      longDescription: 'Máy in phun màu Epson EcoTank L3210 với hệ thống bình mực liền tiết kiệm chi phí, phù hợp cho gia đình và văn phòng nhỏ.',
      price: 4500000,
      originalPrice: 5500000,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'in-mau-ricoh',
      stock: 10,
      discount: 18,
      isNew: false,
      type: 'buy',
      features: [
        'Bình mực liền',
        'Tiết kiệm chi phí',
        'In màu chất lượng',
        'Bảo hành 12 tháng'
      ],
      specifications: {
        'Tốc độ in': '10 trang/phút',
        'Khổ giấy': 'A4',
        'Độ phân giải': '5760 x 1440 dpi',
        'Bộ nhớ': '64MB',
        'Kết nối': 'USB',
        'Kích thước': '375 x 347 x 179 mm',
        'Trọng lượng': '3.5 kg'
      },
      rating: 4.4,
      reviewCount: 42
    },
    // Sản phẩm thuê
    {
      id: 201,
      slug: 'thue-may-photocopy-canon-ir-adv-c3530',
      name: 'Thuê Máy Photocopy Canon IR-ADV C3530',
      description: 'Thuê máy photocopy đa chức năng, bao gồm bảo trì và hỗ trợ kỹ thuật',
      longDescription: 'Dịch vụ thuê máy photocopy Canon IR-ADV C3530 với gói dịch vụ toàn diện bao gồm lắp đặt, bảo trì định kỳ, hỗ trợ kỹ thuật 24/7 và thay mực miễn phí.',
      price: 2500000,
      originalPrice: 3000000,
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'thue-ricoh-cong-nghiep',
      stock: 5,
      discount: 16,
      isNew: true,
      type: 'rent',
      rentPeriod: '12 tháng',
      features: [
        'Bảo trì miễn phí',
        'Hỗ trợ 24/7',
        'Lắp đặt miễn phí',
        'Thay mực miễn phí'
      ],
      specifications: {
        'Thời hạn thuê': '12 tháng',
        'Tốc độ in': '30 trang/phút',
        'Khổ giấy': 'A4, A3',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bảo trì': 'Miễn phí',
        'Hỗ trợ': '24/7'
      },
      rating: 4.7,
      reviewCount: 32
    },
    {
      id: 202,
      slug: 'thue-may-photocopy-ricoh-mp-c3004',
      name: 'Thuê Máy Photocopy Ricoh MP C3004',
      description: 'Thuê máy photocopy màu, phù hợp cho văn phòng và doanh nghiệp',
      longDescription: 'Dịch vụ thuê máy photocopy màu Ricoh MP C3004 với gói dịch vụ chuyên nghiệp, phù hợp cho văn phòng và doanh nghiệp cần in màu thường xuyên.',
      price: 3500000,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'thue-ricoh-mau',
      stock: 3,
      isNew: true,
      type: 'rent',
      rentPeriod: '12 tháng',
      features: [
        'In màu chất lượng cao',
        'Bảo trì định kỳ',
        'Thay mực miễn phí',
        'Hỗ trợ kỹ thuật'
      ],
      specifications: {
        'Thời hạn thuê': '12 tháng',
        'Tốc độ in': '30 trang/phút',
        'Khổ giấy': 'A4, A3',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bảo trì': 'Định kỳ',
        'Hỗ trợ': 'Kỹ thuật'
      },
      rating: 4.8,
      reviewCount: 15
    },
    {
      id: 203,
      slug: 'thue-may-photocopy-canon-pixma',
      name: 'Thuê Máy Photocopy Canon PIXMA',
      description: 'Thuê máy in phun màu đa chức năng, in ảnh chất lượng cao',
      longDescription: 'Dịch vụ thuê máy in phun màu Canon PIXMA với khả năng in ảnh chất lượng cao và đa chức năng scan, copy.',
      price: 2200000,
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'thue-konica-mau',
      stock: 4,
      isNew: true,
      type: 'rent',
      rentPeriod: '12 tháng',
      features: [
        'In ảnh chất lượng cao',
        'Scan đa chức năng',
        'Bảo trì miễn phí',
        'Hỗ trợ kỹ thuật'
      ],
      specifications: {
        'Thời hạn thuê': '12 tháng',
        'Tốc độ in': '15 trang/phút',
        'Khổ giấy': 'A4, A5',
        'Độ phân giải': '4800 x 2400 dpi',
        'Bảo trì': 'Miễn phí',
        'Hỗ trợ': 'Kỹ thuật'
      },
      rating: 4.6,
      reviewCount: 8
    },
    {
      id: 204,
      slug: 'thue-may-photocopy-hp-laserjet-pro',
      name: 'Thuê Máy Photocopy HP LaserJet Pro',
      description: 'Thuê máy in laser đơn sắc, hiệu suất cao, ổn định',
      longDescription: 'Dịch vụ thuê máy in laser HP LaserJet Pro với hiệu suất cao và độ ổn định tốt, phù hợp cho văn phòng cần in số lượng lớn.',
      price: 1500000,
      originalPrice: 1800000,
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'thue-ricoh-van-phong',
      stock: 8,
      discount: 16,
      isNew: false,
      type: 'rent',
      rentPeriod: '12 tháng',
      features: [
        'Hiệu suất cao',
        'Độ ổn định tốt',
        'Bảo trì định kỳ',
        'Hỗ trợ kỹ thuật'
      ],
      specifications: {
        'Thời hạn thuê': '12 tháng',
        'Tốc độ in': '40 trang/phút',
        'Khổ giấy': 'A4',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bảo trì': 'Định kỳ',
        'Hỗ trợ': 'Kỹ thuật'
      },
      rating: 4.5,
      reviewCount: 22
    },
    {
      id: 205,
      slug: 'thue-may-photocopy-brother-hl-l2350dw',
      name: 'Thuê Máy Photocopy Brother HL-L2350DW',
      description: 'Thuê máy in laser WiFi, tiện lợi cho văn phòng nhỏ',
      longDescription: 'Dịch vụ thuê máy in laser Brother HL-L2350DW với kết nối WiFi tiện lợi, phù hợp cho văn phòng nhỏ và gia đình.',
      price: 1200000,
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'thue-kho-lon',
      stock: 12,
      isNew: false,
      type: 'rent',
      rentPeriod: '12 tháng',
      features: [
        'Kết nối WiFi',
        'Tiết kiệm năng lượng',
        'Bảo trì miễn phí',
        'Hỗ trợ kỹ thuật'
      ],
      specifications: {
        'Thời hạn thuê': '12 tháng',
        'Tốc độ in': '32 trang/phút',
        'Khổ giấy': 'A4',
        'Độ phân giải': '1200 x 1200 dpi',
        'Bảo trì': 'Miễn phí',
        'Hỗ trợ': 'Kỹ thuật'
      },
      rating: 4.4,
      reviewCount: 18
    },
    {
      id: 206,
      slug: 'thue-may-photocopy-epson-ecotank',
      name: 'Thuê Máy Photocopy Epson EcoTank',
      description: 'Thuê máy in phun màu, tiết kiệm chi phí mực in',
      longDescription: 'Dịch vụ thuê máy in phun màu Epson EcoTank với hệ thống bình mực liền tiết kiệm chi phí, phù hợp cho gia đình và văn phòng nhỏ.',
      price: 1800000,
      originalPrice: 2200000,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'thue-in-mau-ricoh',
      stock: 6,
      discount: 18,
      isNew: false,
      type: 'rent',
      rentPeriod: '12 tháng',
      features: [
        'Bình mực liền',
        'Tiết kiệm chi phí',
        'Bảo trì miễn phí',
        'Hỗ trợ kỹ thuật'
      ],
      specifications: {
        'Thời hạn thuê': '12 tháng',
        'Tốc độ in': '10 trang/phút',
        'Khổ giấy': 'A4',
        'Độ phân giải': '5760 x 1440 dpi',
        'Bảo trì': 'Miễn phí',
        'Hỗ trợ': 'Kỹ thuật'
      },
      rating: 4.3,
      reviewCount: 15
    }
  ];

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
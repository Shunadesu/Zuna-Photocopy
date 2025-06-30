import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, CheckCircle, Truck, Shield, Clock, ShoppingCart, Calendar } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import ProductSwiper from '../components/product/ProductSwiper';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';
import ThemePreview from '../components/ui/ThemePreview';
import { useScrollToTop } from '../hooks/useScrollToTop';
import ProductGrid from '../components/product/ProductGrid';

const Home = () => {
  useScrollToTop(); // Scroll to top when component mounts
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [buyProducts, setBuyProducts] = useState([]);
  const [rentProducts, setRentProducts] = useState([]);

  // Mock data for hero slides
  const heroSlides = [
    {
      id: 1,
      title: 'Máy Photocopy Chất Lượng Cao',
      subtitle: 'Giải pháp in ấn tối ưu cho doanh nghiệp',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      cta: 'Xem sản phẩm',
      link: '/products'
    },
    {
      id: 2,
      title: 'Dịch Vụ Photocopy Chuyên Nghiệp',
      subtitle: 'In ấn nhanh chóng, giá cả hợp lý',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      cta: 'Đặt hàng ngay',
      link: '/services'
    },
    {
      id: 3,
      title: 'Linh Kiện Máy Photocopy Chính Hãng',
      subtitle: 'Đảm bảo chất lượng, bảo hành dài hạn',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      cta: 'Tìm hiểu thêm',
      link: '/products'
    }
  ];

  // Mock data for different product categories
  useEffect(() => {
    // Featured products
    const mockFeaturedProducts = [
      {
        id: 1,
        name: 'Máy Photocopy Canon IR-ADV C3530',
        description: 'Máy photocopy đa chức năng, tốc độ cao, chất lượng in sắc nét',
        price: 25000000,
        originalPrice: 28000000,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Máy Photocopy',
        stock: 5,
        discount: 10,
        isNew: true
      },
      {
        id: 2,
        name: 'Máy Photocopy HP LaserJet Pro',
        description: 'Máy in laser đa chức năng, tiết kiệm mực, hiệu suất cao',
        price: 8500000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Máy In',
        stock: 12,
        isNew: false
      },
      {
        id: 3,
        name: 'Mực In Canon Original',
        description: 'Mực in chính hãng Canon, chất lượng cao, tương thích tốt',
        price: 450000,
        originalPrice: 550000,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Linh Kiện',
        stock: 50,
        discount: 18,
        isNew: false
      },
      {
        id: 4,
        name: 'Giấy In A4 Double A',
        description: 'Giấy in chất lượng cao, độ trắng 100%, phù hợp mọi loại máy',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Văn Phòng Phẩm',
        stock: 200,
        isNew: false
      }
    ];

    // Buy products (mua trực tiếp)
    const mockBuyProducts = [
      {
        id: 101,
        slug: 'may-photocopy-canon-ir-adv-c3530',
        name: 'Máy Photocopy Canon IR-ADV C3530',
        description: 'Máy photocopy đa chức năng, tốc độ 30 trang/phút, in màu chất lượng cao',
        price: 25000000,
        originalPrice: 28000000,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Mua Trực Tiếp',
        stock: 3,
        discount: 10,
        isNew: true,
        type: 'buy',
        features: ['In màu', 'Scan', 'Fax', 'Bảo hành 12 tháng']
      },
      {
        id: 102,
        slug: 'may-photocopy-ricoh-mp-c3004',
        name: 'Máy Photocopy Ricoh MP C3004',
        description: 'Máy photocopy màu đa chức năng, tốc độ 30 trang/phút',
        price: 35000000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Mua Trực Tiếp',
        stock: 2,
        isNew: true,
        type: 'buy',
        features: ['In màu', 'Scan', 'Bảo hành 24 tháng']
      },
      {
        id: 103,
        slug: 'may-photocopy-hp-laserjet-pro-m404n',
        name: 'Máy Photocopy HP LaserJet Pro M404n',
        description: 'Máy in laser đơn sắc, tốc độ cao, tiết kiệm mực',
        price: 8500000,
        originalPrice: 9500000,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Mua Trực Tiếp',
        stock: 8,
        discount: 10,
        isNew: false,
        type: 'buy',
        features: ['In đơn sắc', 'Tốc độ cao', 'Bảo hành 12 tháng']
      },
      {
        id: 104,
        slug: 'may-photocopy-brother-hl-l2350dw',
        name: 'Máy Photocopy Brother HL-L2350DW',
        description: 'Máy in laser đơn sắc, kết nối WiFi, tiết kiệm năng lượng',
        price: 6500000,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Mua Trực Tiếp',
        stock: 15,
        isNew: false,
        type: 'buy',
        features: ['WiFi', 'Tiết kiệm năng lượng', 'Bảo hành 12 tháng']
      },
      {
        id: 105,
        slug: 'may-photocopy-epson-ecotank-l3210',
        name: 'Máy Photocopy Epson EcoTank L3210',
        description: 'Máy in phun màu, hệ thống bình mực liền, tiết kiệm chi phí',
        price: 4500000,
        originalPrice: 5500000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Mua Trực Tiếp',
        stock: 10,
        discount: 18,
        isNew: false,
        type: 'buy',
        features: ['In màu', 'Bình mực liền', 'Tiết kiệm chi phí']
      },
      {
        id: 106,
        slug: 'may-photocopy-canon-pixma-ts8320',
        name: 'Máy Photocopy Canon PIXMA TS8320',
        description: 'Máy in phun màu đa chức năng, in ảnh chất lượng cao',
        price: 7500000,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Mua Trực Tiếp',
        stock: 6,
        isNew: true,
        type: 'buy',
        features: ['In ảnh chất lượng cao', 'Scan', 'WiFi', 'Bluetooth']
      }
    ];

    // Rent products (thuê máy)
    const mockRentProducts = [
      {
        id: 201,
        slug: 'thue-may-photocopy-canon-ir-adv-c3530',
        name: 'Thuê Máy Photocopy Canon IR-ADV C3530',
        description: 'Thuê máy photocopy đa chức năng, bao gồm bảo trì và hỗ trợ kỹ thuật',
        price: 2500000,
        originalPrice: 3000000,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Thuê Máy',
        stock: 5,
        discount: 16,
        isNew: true,
        type: 'rent',
        rentPeriod: '12 tháng',
        features: ['Bảo trì miễn phí', 'Hỗ trợ 24/7', 'Lắp đặt miễn phí']
      },
      {
        id: 202,
        slug: 'thue-may-photocopy-ricoh-mp-c3004',
        name: 'Thuê Máy Photocopy Ricoh MP C3004',
        description: 'Thuê máy photocopy màu, phù hợp cho văn phòng và doanh nghiệp',
        price: 3500000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Thuê Máy',
        stock: 3,
        isNew: true,
        type: 'rent',
        rentPeriod: '12 tháng',
        features: ['In màu chất lượng cao', 'Bảo trì định kỳ', 'Thay mực miễn phí']
      },
      {
        id: 203,
        slug: 'thue-may-photocopy-hp-laserjet-pro',
        name: 'Thuê Máy Photocopy HP LaserJet Pro',
        description: 'Thuê máy in laser đơn sắc, hiệu suất cao, ổn định',
        price: 1500000,
        originalPrice: 1800000,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Thuê Máy',
        stock: 8,
        discount: 16,
        isNew: false,
        type: 'rent',
        rentPeriod: '6 tháng',
        features: ['In đơn sắc', 'Tốc độ cao', 'Bảo trì miễn phí']
      },
      {
        id: 204,
        slug: 'thue-may-photocopy-brother-hl-l2350dw',
        name: 'Thuê Máy Photocopy Brother HL-L2350DW',
        description: 'Thuê máy in laser WiFi, tiện lợi cho văn phòng nhỏ',
        price: 1200000,
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Thuê Máy',
        stock: 12,
        isNew: false,
        type: 'rent',
        rentPeriod: '6 tháng',
        features: ['Kết nối WiFi', 'Tiết kiệm năng lượng', 'Hỗ trợ kỹ thuật']
      },
      {
        id: 205,
        slug: 'thue-may-photocopy-epson-ecotank',
        name: 'Thuê Máy Photocopy Epson EcoTank',
        description: 'Thuê máy in phun màu, tiết kiệm chi phí mực in',
        price: 1800000,
        originalPrice: 2200000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Thuê Máy',
        stock: 6,
        discount: 18,
        isNew: false,
        type: 'rent',
        rentPeriod: '12 tháng',
        features: ['Tiết kiệm mực', 'In màu', 'Bảo trì định kỳ']
      },
      {
        id: 206,
        slug: 'thue-may-photocopy-canon-pixma',
        name: 'Thuê Máy Photocopy Canon PIXMA',
        description: 'Thuê máy in phun màu đa chức năng, in ảnh chất lượng cao',
        price: 2200000,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        images: [
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        ],
        category: 'Thuê Máy',
        stock: 4,
        isNew: true,
        type: 'rent',
        rentPeriod: '12 tháng',
        features: ['In ảnh chất lượng cao', 'Scan', 'WiFi', 'Hỗ trợ 24/7']
      }
    ];

    setFeaturedProducts(mockFeaturedProducts);
    setBuyProducts(mockBuyProducts);
    setRentProducts(mockRentProducts);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const features = [
    {
      icon: Truck,
      title: 'Giao hàng nhanh chóng',
      description: 'Giao hàng trong vòng 24h tại TP.HCM'
    },
    {
      icon: Shield,
      title: 'Bảo hành chính hãng',
      description: 'Bảo hành từ 12-36 tháng tùy sản phẩm'
    },
    {
      icon: Clock,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ kỹ thuật hỗ trợ mọi lúc'
    }
  ];

  return (
    <>
      <SEO 
        title="Trang chủ"
        description="Zuna Photocopy - Dịch vụ photocopy chuyên nghiệp, bán và cho thuê máy photocopy, linh kiện máy photocopy chính hãng với giá cả hợp lý tại TP.HCM. Giao hàng nhanh, bảo hành dài hạn."
        keywords="photocopy, máy photocopy, bán máy photocopy, cho thuê máy photocopy, linh kiện máy photocopy, dịch vụ photocopy TP.HCM"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Zuna Photocopy",
          "description": "Dịch vụ photocopy chuyên nghiệp, bán và cho thuê máy photocopy",
          "url": "https://zunaphotocopy.com",
          "telephone": "+84-123-456-789",
          "email": "info@zunaphotocopy.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Đường ABC",
            "addressLocality": "TP.HCM",
            "addressCountry": "VN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "10.8231",
            "longitude": "106.6297"
          },
          "openingHours": "Mo-Sa 07:00-21:00, Su 08:00-18:00",
          "priceRange": "$$",
          "sameAs": [
            "https://facebook.com/zunaphotocopy",
            "https://zalo.me/0123456789"
          ]
        }}
      />
      
      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl text-white flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                      {slide.subtitle}
                    </p>
                    <Link to={slide.link}>
                      <Button size="lg" className="text-lg px-8 py-4">
                        {slide.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tại sao chọn Zuna Photocopy?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chúng tôi cam kết mang đến những sản phẩm và dịch vụ chất lượng cao với giá cả hợp lý
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* Buy Products Section */}
        <section className="bg-white">
          <ProductSwiper
            products={buyProducts}
            title="Mua Trực Tiếp Máy Photocopy"
            subtitle="Sở hữu máy photocopy chất lượng cao với giá cả hợp lý, bảo hành chính hãng"
            slidesPerView={3}
          />
          <div className="text-center pb-8">
            <Link to="/ban-may-photo">
              <Button variant="outline" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Xem tất cả máy bán
              </Button>
            </Link>
          </div>
        </section>

        {/* Rent Products Section */}
        <section className="bg-gray-50">
          <ProductSwiper
            products={rentProducts}
            title="Thuê Máy Photocopy"
            subtitle="Giải pháp thuê máy photocopy linh hoạt, tiết kiệm chi phí đầu tư ban đầu"
            slidesPerView={3}
          />
          <div className="text-center pb-8">
            <Link to="/thue-may-photo">
              <Button variant="outline" size="lg">
                <Calendar className="h-5 w-5 mr-2" />
                Xem tất cả máy thuê
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Sản phẩm nổi bật
                </h2>
                <p className="text-gray-600">
                  Những sản phẩm được khách hàng tin tưởng lựa chọn
                </p>
              </div>
              <Link to="/products">
                <Button variant="outline">
                  Xem tất cả
                </Button>
              </Link>
            </div>
            
            <ProductGrid products={featuredProducts} columns={4} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Khách hàng nói gì về chúng tôi
              </h2>
              <p className="text-lg text-gray-600">
                Những đánh giá từ khách hàng đã sử dụng dịch vụ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Nguyễn Văn A',
                  company: 'Công ty ABC',
                  rating: 5,
                  comment: 'Dịch vụ rất tốt, máy photocopy chất lượng cao, giá cả hợp lý. Nhân viên phục vụ nhiệt tình.'
                },
                {
                  name: 'Trần Thị B',
                  company: 'Văn phòng XYZ',
                  rating: 5,
                  comment: 'Đã sử dụng dịch vụ nhiều năm, rất hài lòng về chất lượng và dịch vụ bảo hành.'
                },
                {
                  name: 'Lê Văn C',
                  company: 'Công ty DEF',
                  rating: 5,
                  comment: 'Giao hàng nhanh, lắp đặt chuyên nghiệp, hỗ trợ kỹ thuật tốt.'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 
  // Mock data cho tất cả sản phẩm với slug mới
  export const allProducts = [
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
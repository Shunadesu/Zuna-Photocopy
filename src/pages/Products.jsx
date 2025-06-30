import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import SEO from '../components/ui/SEO';
import Button from '../components/ui/Button';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const buyCategories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'ricoh-cong-nghiep', name: 'Ricoh công nghiệp' },
  { id: 'moi', name: 'Máy Photocopy Mới' },
  { id: 'kho-lon', name: 'Máy photocopy khổ lớn' },
  { id: 'ricoh-van-phong', name: 'Ricoh văn phòng' },
  { id: 'ricoh-mau', name: 'Ricoh màu' },
  { id: 'konica-mau', name: 'Konica màu' },
  { id: 'in-mau-ricoh', name: 'Máy in màu Ricoh' },
];
const rentCategories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'thue-ricoh-cong-nghiep', name: 'Thuê Ricoh công nghiệp' },
  { id: 'thue-ricoh-van-phong', name: 'Thuê Ricoh văn phòng' },
  { id: 'thue-kho-lon', name: 'Thuê máy photocopy khổ lớn' },
  { id: 'thue-ricoh-mau', name: 'Thuê Ricoh màu' },
  { id: 'thue-konica-mau', name: 'Thuê Konica màu' },
  { id: 'thue-in-mau-ricoh', name: 'Thuê máy in màu Ricoh' },
];

const PRODUCT_TYPES = [
  { id: 'ban', label: 'Bán máy' },
  { id: 'thue', label: 'Thuê máy' },
  { id: 'linhkien', label: 'Linh kiện' },
];

const Products = () => {
  const query = useQuery();
  
  const category = query.get('category') || 'all';

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [sortBy, setSortBy] = useState('name');
  const [type, setType] = useState('ban');

  // Mock data cho bán và thuê
  useEffect(() => {
    let mockProducts = [];
    if (type === 'ban') {
      mockProducts = [
        {
          id: 101,
          slug: 'may-photocopy-canon-ir-adv-c3530',
          name: 'Máy Photocopy Canon IR-ADV C3530',
          description: 'Máy photocopy đa chức năng, tốc độ 30 trang/phút, in màu chất lượng cao',
          price: 25000000,
          originalPrice: 28000000,
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'ricoh-cong-nghiep',
          stock: 3,
          discount: 10,
          isNew: true,
          type: 'buy',
          features: ['Tốc độ in: 30 trang/phút', 'Khổ giấy: A4, A3', 'In màu chất lượng cao'],
        },
        {
          id: 102,
          slug: 'may-photocopy-ricoh-mp-c3004',
          name: 'Máy Photocopy Ricoh MP C3004',
          description: 'Máy photocopy màu đa chức năng, tốc độ 30 trang/phút',
          price: 35000000,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'ricoh-mau',
          stock: 2,
          isNew: true,
          type: 'buy',
        },
        {
          id: 103,
          slug: 'may-photocopy-hp-laserjet-pro-m404n',
          name: 'Máy Photocopy HP LaserJet Pro M404n',
          description: 'Máy in laser đơn sắc, tốc độ cao, tiết kiệm mực',
          price: 8500000,
          originalPrice: 9500000,
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'ricoh-van-phong',
          stock: 8,
          discount: 10,
          isNew: false,
          type: 'buy',
        },
        {
          id: 104,
          slug: 'may-photocopy-brother-hl-l2350dw',
          name: 'Máy Photocopy Brother HL-L2350DW',
          description: 'Máy in laser đơn sắc, kết nối WiFi, tiết kiệm năng lượng',
          price: 6500000,
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'kho-lon',
          stock: 15,
          isNew: false,
          type: 'buy',
        },
        {
          id: 105,
          slug: 'may-photocopy-epson-ecotank-l3210',
          name: 'Máy Photocopy Epson EcoTank L3210',
          description: 'Máy in phun màu, hệ thống bình mực liền, tiết kiệm chi phí',
          price: 4500000,
          originalPrice: 5500000,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'in-mau-ricoh',
          stock: 10,
          discount: 18,
          isNew: false,
          type: 'buy',
        },
        {
          id: 106,
          slug: 'may-photocopy-canon-pixma-ts8320',
          name: 'Máy Photocopy Canon PIXMA TS8320',
          description: 'Máy in phun màu đa chức năng, in ảnh chất lượng cao',
          price: 7500000,
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'konica-mau',
          stock: 6,
          isNew: true,
          type: 'buy',
        },
      ];
    } else if (type === 'thue') {
      mockProducts = [
        {
          id: 201,
          slug: 'thue-may-photocopy-canon-ir-adv-c3530',
          name: 'Thuê Máy Photocopy Canon IR-ADV C3530',
          description: 'Thuê máy photocopy đa chức năng, bao gồm bảo trì và hỗ trợ kỹ thuật',
          price: 2500000,
          originalPrice: 3000000,
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'thue-ricoh-cong-nghiep',
          stock: 5,
          discount: 16,
          isNew: true,
          type: 'rent',
        },
        {
          id: 202,
          slug: 'thue-may-photocopy-ricoh-mp-c3004',
          name: 'Thuê Máy Photocopy Ricoh MP C3004',
          description: 'Thuê máy photocopy màu, phù hợp cho văn phòng và doanh nghiệp',
          price: 3500000,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'thue-ricoh-mau',
          stock: 3,
          isNew: true,
          type: 'rent',
        },
        {
          id: 203,
          slug: 'thue-may-photocopy-hp-laserjet-pro',
          name: 'Thuê Máy Photocopy HP LaserJet Pro',
          description: 'Thuê máy in laser đơn sắc, hiệu suất cao, ổn định',
          price: 1500000,
          originalPrice: 1800000,
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'thue-ricoh-van-phong',
          stock: 8,
          discount: 16,
          isNew: false,
          type: 'rent',
        },
        {
          id: 204,
          slug: 'thue-may-photocopy-brother-hl-l2350dw',
          name: 'Thuê Máy Photocopy Brother HL-L2350DW',
          description: 'Thuê máy in laser WiFi, tiện lợi cho văn phòng nhỏ',
          price: 1200000,
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'thue-kho-lon',
          stock: 12,
          isNew: false,
          type: 'rent',
        },
        {
          id: 205,
          slug: 'thue-may-photocopy-epson-ecotank',
          name: 'Thuê Máy Photocopy Epson EcoTank',
          description: 'Thuê máy in phun màu, tiết kiệm chi phí mực in',
          price: 1800000,
          originalPrice: 2200000,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'thue-in-mau-ricoh',
          stock: 6,
          discount: 18,
          isNew: false,
          type: 'rent',
        },
        {
          id: 206,
          slug: 'thue-may-photocopy-canon-pixma',
          name: 'Thuê Máy Photocopy Canon PIXMA',
          description: 'Thuê máy in phun màu đa chức năng, in ảnh chất lượng cao',
          price: 2200000,
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'thue-konica-mau',
          stock: 4,
          isNew: true,
          type: 'rent',
        },
      ];
    } else if (type === 'linhkien') {
      mockProducts = [
        {
          id: 3,
          name: 'Hộp mực Ricoh MP 2501',
          description: 'Hộp mực chính hãng cho máy Ricoh, in sắc nét, bền màu',
          price: 450000,
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          category: 'linhkien',
          stock: 20,
          isNew: false,
          type: 'part',
          features: ['Dùng cho Ricoh MP 2501', 'In sắc nét', 'Chính hãng'],
        },
      ];
    }
    setProducts(mockProducts);
    setLoading(false);
  }, [type]);

  // Lọc sản phẩm theo category, search, price...
  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.isNew - a.isNew;
        default:
          return 0;
      }
    });
    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);

  // Đổi category khi đổi query
  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  // Lấy categories phù hợp
  const categories = type === 'ban' ? buyCategories : type === 'thue' ? rentCategories : [];
  const pageTitle = type === 'ban' ? 'Sản phẩm bán máy photocopy' : type === 'thue' ? 'Sản phẩm thuê máy photocopy' : 'Sản phẩm linh kiện';
  const pageDesc = type === 'ban'
    ? 'Chọn mua máy photocopy, máy in, máy mới, máy công nghiệp, máy màu, máy khổ lớn...'
    : type === 'thue'
    ? 'Dịch vụ cho thuê máy photocopy, máy in, máy màu, máy công nghiệp, máy khổ lớn...'
    : 'Sản phẩm linh kiện máy photocopy chính hãng tại Zuna.';

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <SEO title={pageTitle} description={pageDesc} />
      <div className="container-responsive pt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tất cả sản phẩm</h1>
        {/* Tabs filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {PRODUCT_TYPES.map((t) => (
            <Button
              key={t.id}
              variant={type === t.id ? 'primary' : 'outline'}
              className="px-6"
              onClick={() => setType(t.id)}
            >
              {t.label}
            </Button>
          ))}
        </div>
        {/* Product grid */}
        <ProductGrid products={filteredProducts} loading={loading} />
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 py-12 text-lg">Không có sản phẩm nào.</div>
        )}
      </div>
    </div>
  );
};

export default Products; 
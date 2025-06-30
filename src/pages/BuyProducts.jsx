import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Search, ShoppingCart } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import ProductSwiper from '../components/product/ProductSwiper';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import SEO from '../components/ui/SEO';

const BuyProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get('category') || '';

  // Mock data cho sản phẩm bán
  const buyProducts = [
    {
      id: 101,
      slug: 'may-photocopy-canon-ir-adv-c3530',
      name: 'Máy Photocopy Canon IR-ADV C3530',
      description: 'Máy photocopy đa chức năng, tốc độ 30 trang/phút, in màu chất lượng cao',
      price: 25000000,
      originalPrice: 28000000,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.8,
      reviewCount: 24
    },
    {
      id: 102,
      slug: 'may-photocopy-ricoh-mp-c3004',
      name: 'Máy Photocopy Ricoh MP C3004',
      description: 'Máy photocopy màu đa chức năng, tốc độ 30 trang/phút',
      price: 35000000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.9,
      reviewCount: 18
    },
    {
      id: 103,
      slug: 'may-photocopy-canon-pixma-ts8320',
      name: 'Máy Photocopy Canon PIXMA TS8320',
      description: 'Máy in phun màu đa chức năng, in ảnh chất lượng cao',
      price: 7500000,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.7,
      reviewCount: 12
    },
    {
      id: 104,
      slug: 'may-photocopy-hp-laserjet-pro-m404n',
      name: 'Máy Photocopy HP LaserJet Pro M404n',
      description: 'Máy in laser đơn sắc, tốc độ cao, tiết kiệm mực',
      price: 8500000,
      originalPrice: 9500000,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.6,
      reviewCount: 28
    },
    {
      id: 105,
      slug: 'may-photocopy-brother-hl-l2350dw',
      name: 'Máy Photocopy Brother HL-L2350DW',
      description: 'Máy in laser đơn sắc, kết nối WiFi, tiết kiệm năng lượng',
      price: 6500000,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.5,
      reviewCount: 35
    },
    {
      id: 106,
      slug: 'may-photocopy-epson-ecotank-l3210',
      name: 'Máy Photocopy Epson EcoTank L3210',
      description: 'Máy in phun màu, hệ thống bình mực liền, tiết kiệm chi phí',
      price: 4500000,
      originalPrice: 5500000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.4,
      reviewCount: 42
    }
  ];

  // Categories cho sản phẩm bán
  const categories = [
    { id: 'ricoh-cong-nghiep', name: 'Ricoh Công nghiệp', count: 1 },
    { id: 'ricoh-mau', name: 'Ricoh Màu', count: 1 },
    { id: 'konica-mau', name: 'Konica Màu', count: 1 },
    { id: 'ricoh-van-phong', name: 'Ricoh Văn phòng', count: 1 },
    { id: 'kho-lon', name: 'Kho lớn', count: 1 },
    { id: 'in-mau-ricoh', name: 'In màu Ricoh', count: 1 }
  ];

  // Lọc sản phẩm theo category nếu có
  const filteredProducts = category 
    ? buyProducts.filter(product => product.category === category)
    : buyProducts;

  const handleCategoryFilter = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : categoryId;
  };

  return (
    <>
      <SEO
        title="Bán máy photocopy - Zuna Photocopy"
        description="Mua máy photocopy chính hãng với giá tốt nhất. Đa dạng các loại máy photocopy từ các thương hiệu uy tín như Canon, Ricoh, HP, Brother."
        keywords="bán máy photocopy, mua máy photocopy, máy photocopy chính hãng, Zuna Photocopy"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bán máy photocopy
          </h1>
          <p className="text-gray-600">
            {category 
              ? `Danh mục: ${getCategoryName(category)}`
              : 'Mua máy photocopy chính hãng với giá tốt nhất'
            }
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Hiển thị {filteredProducts.length} sản phẩm
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center space-x-4">
              {/* View Mode */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="name">Tên A-Z</option>
                <option value="name-desc">Tên Z-A</option>
                <option value="price">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
                <option value="newest">Mới nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Bộ lọc</span>
              </Button>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Danh mục</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.id)}
                          onChange={() => handleCategoryFilter(cat.id)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {cat.name} ({cat.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Khoảng giá</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Từ"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-24"
                      />
                      <span className="text-gray-500">-</span>
                      <Input
                        type="number"
                        placeholder="Đến"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000000])}
                        className="w-24"
                      />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Tính năng</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Có WiFi</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">In màu</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Scan</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products */}
        {viewMode === 'grid' ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Danh mục: {getCategoryName(product.category)}</span>
                      <span>•</span>
                      <span>Đánh giá: {product.rating}/5 ({product.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600 mb-2">
                      {product.price.toLocaleString('vi-VN')}đ
                    </div>
                    <Button size="sm" className="flex items-center space-x-1">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Thêm vào giỏ</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingCart className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Không tìm thấy sản phẩm
            </h3>
            <p className="text-gray-600">
              Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default BuyProducts; 
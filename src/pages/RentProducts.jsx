import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Search, Calendar } from 'lucide-react';
import { ProductGrid, Button, Input, SEO } from '../components';

const RentProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get('category') || '';

  // Mock data cho sản phẩm thuê
  const rentProducts = [
    {
      id: 201,
      slug: 'thue-may-photocopy-canon-ir-adv-c3530',
      name: 'Thuê Máy Photocopy Canon IR-ADV C3530',
      description: 'Thuê máy photocopy đa chức năng, bao gồm bảo trì và hỗ trợ kỹ thuật',
      price: 2500000,
      originalPrice: 3000000,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.7,
      reviewCount: 32
    },
    {
      id: 202,
      slug: 'thue-may-photocopy-ricoh-mp-c3004',
      name: 'Thuê Máy Photocopy Ricoh MP C3004',
      description: 'Thuê máy photocopy màu, phù hợp cho văn phòng và doanh nghiệp',
      price: 3500000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.8,
      reviewCount: 15
    },
    {
      id: 203,
      slug: 'thue-may-photocopy-canon-pixma',
      name: 'Thuê Máy Photocopy Canon PIXMA',
      description: 'Thuê máy in phun màu đa chức năng, in ảnh chất lượng cao',
      price: 2200000,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.6,
      reviewCount: 8
    },
    {
      id: 204,
      slug: 'thue-may-photocopy-hp-laserjet-pro',
      name: 'Thuê Máy Photocopy HP LaserJet Pro',
      description: 'Thuê máy in laser đơn sắc, hiệu suất cao, ổn định',
      price: 1500000,
      originalPrice: 1800000,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.5,
      reviewCount: 22
    },
    {
      id: 205,
      slug: 'thue-may-photocopy-brother-hl-l2350dw',
      name: 'Thuê Máy Photocopy Brother HL-L2350DW',
      description: 'Thuê máy in laser WiFi, tiện lợi cho văn phòng nhỏ',
      price: 1200000,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.4,
      reviewCount: 18
    },
    {
      id: 206,
      slug: 'thue-may-photocopy-epson-ecotank',
      name: 'Thuê Máy Photocopy Epson EcoTank',
      description: 'Thuê máy in phun màu, tiết kiệm chi phí mực in',
      price: 1800000,
      originalPrice: 2200000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      rating: 4.3,
      reviewCount: 15
    }
  ];

  // Categories cho sản phẩm thuê
  const categories = [
    { id: 'thue-ricoh-cong-nghiep', name: 'Thuê Ricoh Công nghiệp', count: 1 },
    { id: 'thue-ricoh-mau', name: 'Thuê Ricoh Màu', count: 1 },
    { id: 'thue-konica-mau', name: 'Thuê Konica Màu', count: 1 },
    { id: 'thue-ricoh-van-phong', name: 'Thuê Ricoh Văn phòng', count: 1 },
    { id: 'thue-kho-lon', name: 'Thuê Kho lớn', count: 1 },
    { id: 'thue-in-mau-ricoh', name: 'Thuê In màu Ricoh', count: 1 }
  ];

  // Lọc sản phẩm theo category nếu có
  const filteredProducts = category 
    ? rentProducts.filter(product => product.category === category)
    : rentProducts;

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
        title="Thuê máy photocopy - Zuna Photocopy"
        description="Thuê máy photocopy với dịch vụ toàn diện. Bao gồm lắp đặt, bảo trì, thay mực miễn phí và hỗ trợ kỹ thuật 24/7."
        keywords="thuê máy photocopy, dịch vụ thuê máy photocopy, bảo trì máy photocopy, Zuna Photocopy"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Thuê máy photocopy
          </h1>
          <p className="text-gray-600">
            {category 
              ? `Danh mục: ${getCategoryName(category)}`
              : 'Thuê máy photocopy với dịch vụ toàn diện, tiết kiệm chi phí'
            }
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Hiển thị {filteredProducts.length} sản phẩm
          </p>
        </div>

        {/* Service Benefits */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Dịch vụ thuê máy photocopy toàn diện
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-blue-900">Thời hạn linh hoạt</h3>
                <p className="text-sm text-blue-700">Từ 6 tháng đến 36 tháng</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Bảo trì miễn phí</h3>
                <p className="text-sm text-blue-700">Định kỳ và khi cần thiết</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">24/7</span>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Hỗ trợ kỹ thuật</h3>
                <p className="text-sm text-blue-700">Hỗ trợ 24/7 khi cần</p>
              </div>
            </div>
          </div>
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
                  placeholder="Tìm kiếm dịch vụ thuê..."
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
                  <h3 className="font-medium text-gray-900 mb-3">Khoảng giá (tháng)</h3>
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
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000000])}
                        className="w-24"
                      />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Dịch vụ bao gồm</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Bảo trì miễn phí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Thay mực miễn phí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Lắp đặt miễn phí</span>
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
                      <span>Thời hạn: {product.rentPeriod}</span>
                      <span>•</span>
                      <span>Đánh giá: {product.rating}/5 ({product.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600 mb-2">
                      {product.price.toLocaleString('vi-VN')}đ/tháng
                    </div>
                    <Button size="sm" className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Thuê ngay</span>
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
              <Calendar className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Không tìm thấy dịch vụ thuê
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

export default RentProducts; 
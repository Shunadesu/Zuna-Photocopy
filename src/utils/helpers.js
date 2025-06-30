// Format price to Vietnamese currency
export const formatPrice = (price) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

// Format price with discount
export const formatPriceWithDiscount = (price, originalPrice) => {
  if (originalPrice && originalPrice > price) {
    return {
      current: formatPrice(price),
      original: formatPrice(originalPrice),
      discount: Math.round(((originalPrice - price) / originalPrice) * 100)
    };
  }
  return {
    current: formatPrice(price),
    original: null,
    discount: 0
  };
};

// Generate slug from text
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
};

// Check if product is rent type
export const isRentProduct = (product) => {
  return product.type === 'rent' || product.category?.includes('Thuê');
};

// Check if product is buy type
export const isBuyProduct = (product) => {
  return product.type === 'buy' || product.category?.includes('Mua');
};

// Get product slug
export const getProductSlug = (product) => {
  if (product.slug) return product.slug;
  return generateSlug(product.name);
};

// Format stock status
export const formatStockStatus = (stock, isRent = false) => {
  if (stock === 0) {
    return {
      text: isRent ? 'Hết máy thuê' : 'Hết hàng',
      color: 'text-red-600',
      available: false
    };
  }
  if (stock <= 5) {
    return {
      text: `Chỉ còn ${stock} ${isRent ? 'máy' : 'sản phẩm'}`,
      color: 'text-orange-600',
      available: true
    };
  }
  return {
    text: `Còn ${stock} ${isRent ? 'máy' : 'sản phẩm'}`,
    color: 'text-green-600',
    available: true
  };
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate phone number (Vietnamese format)
export const validatePhone = (phone) => {
  const re = /^(\+84|84|0)[0-9]{9}$/;
  return re.test(phone.replace(/\s/g, ''));
};

// Format phone number
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('84')) {
    return '+84 ' + cleaned.substring(2).replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  }
  if (cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
  }
  return phone;
};

// Get category display name
export const getCategoryDisplayName = (category) => {
  const categoryMap = {
    'ricoh-cong-nghiep': 'Ricoh công nghiệp',
    'ricoh-van-phong': 'Ricoh văn phòng',
    'ricoh-mau': 'Ricoh màu',
    'konica-mau': 'Konica màu',
    'in-mau-ricoh': 'Máy in màu Ricoh',
    'kho-lon': 'Máy photocopy khổ lớn',
    'moi': 'Máy Photocopy Mới',
    'thue-ricoh-cong-nghiep': 'Thuê Ricoh công nghiệp',
    'thue-ricoh-van-phong': 'Thuê Ricoh văn phòng',
    'thue-ricoh-mau': 'Thuê Ricoh màu',
    'thue-konica-mau': 'Thuê Konica màu',
    'thue-in-mau-ricoh': 'Thuê máy in màu Ricoh',
    'thue-kho-lon': 'Thuê máy photocopy khổ lớn'
  };
  return categoryMap[category] || category;
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'newest':
      return sorted.sort((a, b) => b.isNew - a.isNew);
    case 'popular':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    default:
      return sorted;
  }
};

// Filter products
export const filterProducts = (products, filters) => {
  return products.filter(product => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (product.category !== filters.category) return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) return false;
    }

    // Type filter (buy/rent)
    if (filters.type) {
      if (product.type !== filters.type) return false;
    }

    // Stock filter
    if (filters.inStock) {
      if (product.stock === 0) return false;
    }

    return true;
  });
}; 
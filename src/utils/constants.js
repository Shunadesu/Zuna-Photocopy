// API URLs
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// App Configuration
export const APP_NAME = 'Zuna Photocopy';
export const APP_DESCRIPTION = 'Dịch vụ photocopy chuyên nghiệp, bán và cho thuê máy photocopy chất lượng cao';

// Contact Information
export const CONTACT_INFO = {
  phone: '0123 456 789',
  email: 'info@zunaphotocopy.com',
  address: '123 Đường ABC, Quận XYZ, TP.HCM',
  zalo: '0123456789',
  facebook: 'https://facebook.com/zunaphotocopy',
  workingHours: {
    weekdays: '7:00 - 21:00',
    sunday: '8:00 - 18:00'
  }
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'Tất cả' },
  { id: 'photocopy', name: 'Máy Photocopy' },
  { id: 'printer', name: 'Máy In' },
  { id: 'parts', name: 'Linh Kiện' },
  { id: 'supplies', name: 'Văn Phòng Phẩm' }
];

// Navigation Links
export const NAVIGATION_LINKS = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Sản phẩm', href: '/products' },
  { name: 'Dịch vụ', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Liên hệ', href: '/contact' }
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/zunaphotocopy', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com/zunaphotocopy', icon: 'instagram' },
  { name: 'Zalo', url: 'https://zalo.me/0123456789', icon: 'zalo' }
];

// SEO Default Values
export const SEO_DEFAULTS = {
  title: 'Zuna Photocopy - Dịch vụ photocopy chuyên nghiệp',
  description: 'Zuna Photocopy cung cấp dịch vụ photocopy chuyên nghiệp, bán và cho thuê máy photocopy, linh kiện máy photocopy chính hãng với giá cả hợp lý tại TP.HCM.',
  keywords: 'photocopy, máy photocopy, bán máy photocopy, cho thuê máy photocopy, linh kiện máy photocopy, dịch vụ photocopy TP.HCM',
  image: 'https://zunaphotocopy.com/og-image.jpg',
  url: 'https://zunaphotocopy.com'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH: 'auth-storage',
  CART: 'cart-storage',
  THEME: 'theme-preference',
  LANGUAGE: 'language-preference'
};

// Validation Rules
export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  password: {
    minLength: 6,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/
  }
};

// Error Messages
export const ERROR_MESSAGES = {
  required: 'Trường này là bắt buộc',
  email: 'Email không hợp lệ',
  phone: 'Số điện thoại không hợp lệ',
  password: 'Mật khẩu phải có ít nhất 6 ký tự',
  passwordConfirm: 'Mật khẩu không khớp',
  minLength: (min) => `Tối thiểu ${min} ký tự`,
  maxLength: (max) => `Tối đa ${max} ký tự`
}; 
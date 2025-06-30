import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, MessageCircle, User, LogOutIcon } from 'lucide-react';
import { useAuthStore, useCartStore } from '../../store/useStore';
import { productGroups, getProductUrl } from '../../utils/productMapping';
import CartDrawer from '../cart/CartDrawer';

// DropdownMenu component (với link cho từng mục con)
function DropdownMenu({ items, type }) {
  const getOverviewUrl = () => {
    return type === 'buy' ? '/ban-may-photo' : '/thue-may-photo';
  };

  return (
    <div className="absolute left-0 top-full z-50 bg-white shadow-xl rounded-lg p-6 grid grid-cols-3 gap-8 min-w-[600px]">
      {items.map((col, idx) => (
        <div key={idx}>
          <div className="font-bold uppercase text-sm mb-2 border-b border-gray-200 pb-1">{col.title}</div>
          <ul>
            {col.children.map((productName, i) => {
              // Sử dụng cấu trúc URL mới
              const productUrl = getProductUrl(productName, type);
              return (
                <li
                  key={i}
                  className="text-gray-500 py-1 border-b border-gray-100 hover:text-primary-600 cursor-pointer"
                >
                  <Link
                    to={productUrl}
                    className="block w-full h-full"
                  >
                    {productName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {/* Link "Xem tất cả" */}
      <div className="col-span-3 mt-4 pt-4 border-t border-gray-200">
        <Link
          to={getOverviewUrl()}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          Xem tất cả {type === 'buy' ? 'máy bán' : 'máy thuê'} →
        </Link>
      </div>
    </div>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const authDropdownRef = useRef(null);
  const { isAuthenticated, user, logout } = useAuthStore();
  const { getTotalItems, isCartDrawerOpen, openCartDrawer, closeCartDrawer } = useCartStore();
  const location = useLocation();

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (authDropdownRef.current && !authDropdownRef.current.contains(event.target)) {
        setShowAuthDropdown(false);
      }
    }
    if (showAuthDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAuthDropdown]);

  const navigation = [
    { name: 'Trang chủ', href: '/' },
    {
      name: 'Bán máy photo',
      href: '/ban-may-photo',
      type: 'dropdown',
      dropdownType: 'buy',
      items: [
        {
          title: 'MÁY PHOTOCOPY CANON',
          children: productGroups.buy['MÁY PHOTOCOPY CANON'],
        },
        {
          title: 'MÁY PHOTOCOPY RICOH',
          children: productGroups.buy['MÁY PHOTOCOPY RICOH'],
        },
        {
          title: 'MÁY IN KHÁC',
          children: productGroups.buy['MÁY IN KHÁC'],
        },
      ],
    },
    {
      name: 'Thuê máy photo',
      href: '/thue-may-photo',
      type: 'dropdown',
      dropdownType: 'rent',
      items: [
        {
          title: 'THUÊ MÁY CANON',
          children: productGroups.rent['THUÊ MÁY CANON'],
        },
        {
          title: 'THUÊ MÁY RICOH',
          children: productGroups.rent['THUÊ MÁY RICOH'],
        },
        {
          title: 'THUÊ MÁY IN KHÁC',
          children: productGroups.rent['THUÊ MÁY IN KHÁC'],
        },
      ],
    },
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zuna Photocopy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 relative">
            {navigation.map((item) =>
              item.type === 'dropdown' ? (
                <Link key={item.name} to={item.href} className={`relative group px-3 py-2 text-sm font-medium cursor-pointer text-gray-700 hover:text-primary-600 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } `}>
                  
                    {item.name}
                  
                  <div className="hidden group-hover:block">
                    <DropdownMenu items={item.items} type={item.dropdownType} />
                  </div>
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right side - Cart, Auth, Contact */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              type="button"
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={openCartDrawer}
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Auth */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={logout}
                  className="btn-secondary text-sm flex items-center"
                >
                  <span><LogOutIcon className="h-4 w-4 mr-2" fill="currentColor" /></span>
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center" ref={authDropdownRef}>
                <div className="relative">
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    onClick={() => setShowAuthDropdown((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={showAuthDropdown}
                  >
                    <User className="h-6 w-6 text-gray-700" />
                  </button>
                  {showAuthDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-50 animate-fadeIn">
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-t-lg"
                        onClick={() => setShowAuthDropdown(false)}
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-b-lg"
                        onClick={() => setShowAuthDropdown(false)}
                      >
                        Đăng ký
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`$${
                    isActive(item.href)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="pt-4 space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-center btn-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center btn-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng ký
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </header>
  );
};

export default Header; 
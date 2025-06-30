import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold">Zuna Photocopy</span>
            </div>
            <p className="text-gray-300 text-sm">
              Chuyên cung cấp dịch vụ photocopy, bán và cho thuê máy photocopy, 
              linh kiện máy photocopy chất lượng cao với giá cả hợp lý.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://zalo.me/0123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dịch vụ</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Photocopy tài liệu</li>
              <li className="text-gray-300">In ấn khổ lớn</li>
              <li className="text-gray-300">Đóng sách, bìa</li>
              <li className="text-gray-300">Bán máy photocopy</li>
              <li className="text-gray-300">Cho thuê máy photocopy</li>
              <li className="text-gray-300">Sửa chữa, bảo trì</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300 text-sm">
                  123 Đường ABC, Quận XYZ, TP.HCM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a
                  href="tel:0123456789"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  0123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a
                  href="mailto:info@zunaphotocopy.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@zunaphotocopy.com
                </a>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-semibold mb-2">Giờ làm việc</h4>
              <p className="text-gray-300 text-sm">Thứ 2 - Thứ 7: 7:00 - 21:00</p>
              <p className="text-gray-300 text-sm">Chủ nhật: 8:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zuna Photocopy. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import BuyProducts from './pages/BuyProducts';
import RentProducts from './pages/RentProducts';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import BlogDetail from './pages/BlogDetail';
import { Toaster } from 'react-hot-toast';

function App() {
  const { currentTheme, setTheme } = useThemeStore();

  // Initialize theme on app start
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme, setTheme]);

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Zuna Photocopy - Dịch vụ photocopy & in ấn chuyên nghiệp</title>
          <meta name="description" content="Zuna Photocopy cung cấp dịch vụ photocopy, in ấn, bán và cho thuê máy photocopy chuyên nghiệp tại TP.HCM. Bảo trì, sửa chữa máy photocopy tận nơi." />
          <meta name="keywords" content="photocopy, in ấn, máy photocopy, bán máy photocopy, thuê máy photocopy, sửa máy photocopy, TP.HCM" />
          <meta name="author" content="Zuna Photocopy" />
          <meta property="og:title" content="Zuna Photocopy - Dịch vụ photocopy & in ấn chuyên nghiệp" />
          <meta property="og:description" content="Dịch vụ photocopy, in ấn, bán và cho thuê máy photocopy chuyên nghiệp tại TP.HCM" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zuna-photocopy.com" />
          <link rel="canonical" href="https://zuna-photocopy.com" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="ban-may-photo" element={<BuyProducts />} />
            <Route path="thue-may-photo" element={<RentProducts />} />
            <Route path="product/ban-may-photo/:slug" element={<ProductDetail />} />
            <Route path="product/thue-may-photo/:slug" element={<ProductDetail />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        
       
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '14px',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </HelmetProvider>
  );
}

// Placeholder components for other pages
const Services = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* Hero Section */}
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">Dịch vụ Photocopy & In ấn chuyên nghiệp</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">Zuna Photocopy cung cấp giải pháp in ấn, photocopy, bảo trì máy, cho thuê và bán máy photocopy uy tín, nhanh chóng, giá tốt tại TP.HCM.</p>
      <a href="#contact-service" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-primary-700 transition">Nhận tư vấn miễn phí</a>
    </section>

    {/* Service Cards */}
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8V6a4 4 0 00-8 0v2M5 8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2z" /></svg>
          </span>
          <h3 className="text-xl font-semibold mb-2">Photocopy tài liệu</h3>
          <p className="text-gray-600 text-center">Dịch vụ photocopy nhanh chóng, chất lượng cao, giá hợp lý cho cá nhân và doanh nghiệp.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h4m-2 0v4m0 0h-2a2 2 0 01-2-2v-2m4 4h2a2 2 0 002-2v-2" /></svg>
          </span>
          <h3 className="text-xl font-semibold mb-2">Bán & Cho thuê máy photocopy</h3>
          <p className="text-gray-600 text-center">Cung cấp, lắp đặt, bảo hành máy photocopy chính hãng, dịch vụ thuê máy linh hoạt.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2M5 21v-2a4 4 0 018 0v2" /></svg>
          </span>
          <h3 className="text-xl font-semibold mb-2">Bảo trì & sửa chữa</h3>
          <p className="text-gray-600 text-center">Bảo trì, sửa chữa máy photocopy, thay mực, linh kiện tận nơi, hỗ trợ 24/7.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg>
          </span>
          <h3 className="text-xl font-semibold mb-2">In ấn văn phòng</h3>
          <p className="text-gray-600 text-center">In màu, in đen trắng, in tài liệu, in hóa đơn, in số lượng lớn cho doanh nghiệp.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4-4 4 4m0 0V3" /></svg>
          </span>
          <h3 className="text-xl font-semibold mb-2">Scan & số hóa tài liệu</h3>
          <p className="text-gray-600 text-center">Scan, lưu trữ, số hóa tài liệu, chuyển đổi file PDF, bảo mật thông tin.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="bg-primary-100 text-primary-600 rounded-full p-4 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /></svg>
          </span>
          <h3 className="text-xl font-semibold mb-2">Tư vấn giải pháp in ấn</h3>
          <p className="text-gray-600 text-center">Tư vấn chọn máy, giải pháp in ấn tối ưu, tiết kiệm chi phí cho doanh nghiệp.</p>
        </div>
      </div>
    </section>

    {/* Quy trình làm việc */}
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quy trình sử dụng dịch vụ tại Zuna</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-3 text-primary-600 font-bold text-xl">1</div>
          <div className="font-semibold mb-1">Liên hệ tư vấn</div>
          <div className="text-gray-500 text-sm text-center">Gọi điện, nhắn Zalo hoặc gửi form để được tư vấn miễn phí.</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-3 text-primary-600 font-bold text-xl">2</div>
          <div className="font-semibold mb-1">Báo giá & giải pháp</div>
          <div className="text-gray-500 text-sm text-center">Đề xuất giải pháp, báo giá chi tiết, minh bạch.</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-3 text-primary-600 font-bold text-xl">3</div>
          <div className="font-semibold mb-1">Ký hợp đồng & triển khai</div>
          <div className="text-gray-500 text-sm text-center">Ký hợp đồng, lắp đặt, hướng dẫn sử dụng tận nơi.</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-3 text-primary-600 font-bold text-xl">4</div>
          <div className="font-semibold mb-1">Bảo trì & hỗ trợ</div>
          <div className="text-gray-500 text-sm text-center">Bảo trì định kỳ, hỗ trợ kỹ thuật 24/7, thay mực tận nơi.</div>
        </div>
      </div>
    </section>

    {/* Lợi ích khi chọn Zuna */}
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Lý do nên chọn Zuna Photocopy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">💯</span>
          <div className="font-semibold mb-1">Chính hãng, bảo hành dài hạn</div>
          <div className="text-gray-500 text-sm text-center">Cam kết sản phẩm chính hãng, bảo hành 12-36 tháng.</div>
        </div>
        <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">⚡</span>
          <div className="font-semibold mb-1">Phục vụ nhanh chóng</div>
          <div className="text-gray-500 text-sm text-center">Giao hàng, lắp đặt, bảo trì tận nơi trong ngày.</div>
        </div>
        <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">💸</span>
          <div className="font-semibold mb-1">Giá tốt, minh bạch</div>
          <div className="text-gray-500 text-sm text-center">Báo giá rõ ràng, không phát sinh chi phí ẩn.</div>
        </div>
        <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🛠️</span>
          <div className="font-semibold mb-1">Hỗ trợ kỹ thuật 24/7</div>
          <div className="text-gray-500 text-sm text-center">Đội ngũ kỹ thuật viên giàu kinh nghiệm, hỗ trợ mọi lúc.</div>
        </div>
        <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🤝</span>
          <div className="font-semibold mb-1">Tư vấn tận tâm</div>
          <div className="text-gray-500 text-sm text-center">Luôn lắng nghe, tư vấn giải pháp tối ưu cho khách hàng.</div>
        </div>
        <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🔒</span>
          <div className="font-semibold mb-1">Bảo mật thông tin</div>
          <div className="text-gray-500 text-sm text-center">Cam kết bảo mật tuyệt đối dữ liệu, tài liệu khách hàng.</div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Câu hỏi thường gặp</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="font-semibold mb-2">Tôi có thể thuê máy photocopy trong thời gian ngắn không?</div>
          <div className="text-gray-600 text-sm">Zuna cung cấp dịch vụ thuê máy linh hoạt từ 1 tháng đến dài hạn, phù hợp mọi nhu cầu.</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="font-semibold mb-2">Zuna có hỗ trợ bảo trì tận nơi không?</div>
          <div className="text-gray-600 text-sm">Chúng tôi hỗ trợ bảo trì, sửa chữa tận nơi, thay mực, linh kiện nhanh chóng.</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="font-semibold mb-2">Tôi có được tư vấn miễn phí trước khi mua/thuê máy không?</div>
          <div className="text-gray-600 text-sm">Đội ngũ tư vấn của Zuna luôn sẵn sàng hỗ trợ miễn phí, giúp bạn chọn giải pháp tối ưu nhất.</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="font-semibold mb-2">Có xuất hóa đơn VAT không?</div>
          <div className="text-gray-600 text-sm">Zuna xuất hóa đơn VAT đầy đủ cho mọi dịch vụ, sản phẩm.</div>
        </div>
      </div>
    </section>

    {/* CTA cuối trang */}
    <section id="contact-service" className="text-center mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Bạn cần tư vấn hoặc báo giá dịch vụ?</h2>
      <p className="text-gray-600 mb-6">Liên hệ ngay với Zuna Photocopy để được hỗ trợ nhanh nhất!</p>
      <a href="tel:0123456789" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-primary-700 transition">Gọi ngay 0123 456 789</a>
    </section>
  </div>
);

const Blog = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog - Tin tức & Kiến thức</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Mock data bài viết */}
      {[
        {
          id: 1,
          slug: '5-luu-y-khi-chon-mua-may-photocopy-cho-van-phong',
          title: '5 lưu ý khi chọn mua máy photocopy cho văn phòng',
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80',
          date: '2024-06-01',
          excerpt: 'Chọn máy photocopy phù hợp giúp tiết kiệm chi phí, tăng hiệu suất làm việc. Dưới đây là 5 lưu ý quan trọng...'
        },
        {
          id: 2,
          slug: 'huong-dan-bao-tri-may-photocopy-dung-cach',
          title: 'Hướng dẫn bảo trì máy photocopy đúng cách',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
          date: '2024-05-20',
          excerpt: 'Bảo trì máy photocopy định kỳ giúp kéo dài tuổi thọ, giảm lỗi vặt. Xem ngay hướng dẫn chi tiết...'
        },
        {
          id: 3,
          slug: 'so-sanh-thue-va-mua-may-photocopy-lua-chon-nao-toi-uu',
          title: 'So sánh thuê và mua máy photocopy: Lựa chọn nào tối ưu?',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
          date: '2024-05-10',
          excerpt: 'Nên thuê hay mua máy photocopy? Cùng phân tích ưu nhược điểm của từng giải pháp...'
        },
        {
          id: 4,
          slug: 'cac-loi-thuong-gap-va-cach-khac-phuc-may-photocopy',
          title: 'Các lỗi thường gặp và cách khắc phục máy photocopy',
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80',
          date: '2024-04-28',
          excerpt: 'Máy photocopy bị kẹt giấy, mờ bản in, báo lỗi? Xem ngay cách xử lý nhanh và hiệu quả...'
        },
        {
          id: 5,
          slug: 'toi-uu-chi-phi-in-an-cho-doanh-nghiep-nho',
          title: 'Tối ưu chi phí in ấn cho doanh nghiệp nhỏ',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
          date: '2024-04-15',
          excerpt: 'Doanh nghiệp nhỏ cần tối ưu chi phí in ấn? Đây là những giải pháp bạn nên biết...'
        },
        {
          id: 6,
          slug: 'cach-chon-muc-in-phu-hop-cho-may-photocopy',
          title: 'Cách chọn mực in phù hợp cho máy photocopy',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
          date: '2024-04-01',
          excerpt: 'Mực in ảnh hưởng lớn đến chất lượng bản in và tuổi thọ máy. Hướng dẫn chọn mực in phù hợp...'
        }
      ].map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('vi-VN')}</span>
              <Link to={`/blog/${post.slug}`} className="text-primary-600 hover:underline text-sm font-medium">Đọc tiếp</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Liên hệ với Zuna Photocopy</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Thông tin liên hệ */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Thông tin liên hệ</h3>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, TP.HCM</li>
            <li><strong>Điện thoại:</strong> <a href="tel:0123456789" className="text-primary-600 hover:underline">0123 456 789</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@zunaphotocopy.com" className="text-primary-600 hover:underline">info@zunaphotocopy.com</a></li>
            <li><strong>Giờ làm việc:</strong> Thứ 2 - Thứ 7: 7:00 - 21:00, Chủ nhật: 8:00 - 18:00</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/zunaphotocopy" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" title="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg></a>
            <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors" title="Zalo"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg></a>
            <a href="tel:0123456789" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors" title="Gọi điện"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z" /></svg></a>
          </div>
        </div>
      </div>
      {/* Form liên hệ */}
      <div>
        <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
            <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg">Gửi liên hệ</button>
        </form>
      </div>
    </div>
  </div>
);

export default App; 
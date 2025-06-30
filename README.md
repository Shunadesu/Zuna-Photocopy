# 🖨️ Zuna Photocopy - Website Bán và Thuê Máy Photocopy

Website chuyên nghiệp cho dịch vụ bán và thuê máy photocopy, được xây dựng với React + Vite + TailwindCSS.

## ✨ Tính năng chính

### 🛍️ **Quản lý sản phẩm**

- **Bán máy photocopy**: Hiển thị sản phẩm với giá mua, bảo hành
- **Thuê máy photocopy**: Hiển thị dịch vụ thuê với thời hạn, dịch vụ bao gồm
- **Trang chi tiết sản phẩm**: URL thân thiện SEO với slug
- **Quick View**: Xem nhanh thông tin sản phẩm
- **Bộ lọc và tìm kiếm**: Theo danh mục, giá, loại sản phẩm

### 🛒 **Giỏ hàng**

- Thêm/xóa sản phẩm
- Cập nhật số lượng
- Tính tổng tiền tự động
- Lưu trữ local storage
- Hỗ trợ cả sản phẩm bán và thuê

### 🎨 **Giao diện**

- **Responsive design**: Tương thích mọi thiết bị
- **Theme switcher**: 8 màu sắc khác nhau (blue, green, purple, orange, red, teal, yellow, amber)
- **Dark/Light mode**: Chuyển đổi theme
- **Modern UI**: Thiết kế hiện đại với TailwindCSS
- **Smooth animations**: Chuyển động mượt mà

### 🔍 **SEO & Performance**

- **Meta tags**: Tối ưu cho search engines
- **Structured data**: Schema markup
- **Lazy loading**: Tải hình ảnh theo nhu cầu
- **Fast loading**: Vite build optimization

### 📱 **Navigation**

- **Dropdown menu**: 3 cột cho bán/thuê máy
- **Breadcrumb**: Điều hướng rõ ràng
- **User dropdown**: Đăng nhập/đăng ký
- **Mobile menu**: Responsive navigation

## 🚀 Công nghệ sử dụng

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Carousel**: Swiper.js
- **SEO**: React Helmet Async

## 📁 Cấu trúc thư mục

```
src/
├── components/
│   ├── auth/          # Đăng nhập/đăng ký
│   ├── cart/          # Giỏ hàng
│   ├── layout/        # Header, Footer, Layout
│   ├── product/       # ProductCard, ProductGrid, QuickView
│   └── ui/            # Button, Modal, LoadingSpinner
├── hooks/             # Custom hooks
├── pages/             # Trang chính
├── store/             # Zustand stores
└── utils/             # Helper functions
```

## 🎯 Tính năng chi tiết

### **Sản phẩm bán máy**

- ✅ Hiển thị giá mua
- ✅ Thông tin bảo hành
- ✅ Tính năng sản phẩm
- ✅ Thông số kỹ thuật
- ✅ Trạng thái kho hàng

### **Sản phẩm thuê máy**

- ✅ Hiển thị giá thuê/tháng
- ✅ Thời hạn thuê
- ✅ Dịch vụ bao gồm
- ✅ Bảo trì miễn phí
- ✅ Hỗ trợ kỹ thuật

### **Giỏ hàng thông minh**

- ✅ Phân biệt sản phẩm bán/thuê
- ✅ Hiển thị thời hạn thuê
- ✅ Link đến trang chi tiết
- ✅ Tính tổng tiền chính xác

### **Theme system**

- ✅ 8 màu sắc khác nhau
- ✅ CSS custom properties
- ✅ Persistent storage
- ✅ Smooth transitions

## 🔧 Cài đặt và chạy

```bash
# Clone repository
git clone [repository-url]
cd Zuna-Photocopy

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build
```

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Theme Colors

- **Blue**: `#3B82F6`
- **Green**: `#10B981`
- **Purple**: `#8B5CF6`
- **Orange**: `#F59E0B`
- **Red**: `#EF4444`
- **Teal**: `#14B8A6`
- **Yellow**: `#EAB308`
- **Amber**: `#F97316`

## 🔗 Routes

- `/` - Trang chủ
- `/products` - Danh sách sản phẩm
- `/product/:slug` - Chi tiết sản phẩm
- `/cart` - Giỏ hàng
- `/login` - Đăng nhập
- `/register` - Đăng ký

## 📊 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

**Zuna Photocopy** - Giải pháp in ấn chuyên nghiệp cho doanh nghiệp! 🚀

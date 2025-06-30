import { Link } from "react-router-dom";
import React from 'react';

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

  export default Blog;
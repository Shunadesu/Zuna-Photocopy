import { useParams, Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';

// Mock data bài viết
const blogPosts = [
  {
    slug: '5-luu-y-khi-chon-mua-may-photocopy-cho-van-phong',
    title: '5 lưu ý khi chọn mua máy photocopy cho văn phòng',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    date: '2024-06-01',
    excerpt: 'Chọn máy photocopy phù hợp giúp tiết kiệm chi phí, tăng hiệu suất làm việc. Dưới đây là 5 lưu ý quan trọng...',
    content: `
      <p><strong>1. Xác định nhu cầu sử dụng:</strong> Số lượng bản in/tháng, loại tài liệu, màu sắc, khổ giấy...</p>
      <p><strong>2. Chọn thương hiệu uy tín:</strong> Canon, Ricoh, Xerox, Konica Minolta...</p>
      <p><strong>3. Ưu tiên máy có bảo hành, dịch vụ hậu mãi tốt.</strong></p>
      <p><strong>4. Xem xét chi phí vận hành:</strong> Mực, linh kiện, điện năng...</p>
      <p><strong>5. Tham khảo ý kiến chuyên gia hoặc nhà cung cấp uy tín.</strong></p>
      <p>Việc lựa chọn đúng máy photocopy giúp doanh nghiệp tiết kiệm chi phí, tăng hiệu quả công việc.</p>
    `
  },
  {
    slug: 'huong-dan-bao-tri-may-photocopy-dung-cach',
    title: 'Hướng dẫn bảo trì máy photocopy đúng cách',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    date: '2024-05-20',
    excerpt: 'Bảo trì máy photocopy định kỳ giúp kéo dài tuổi thọ, giảm lỗi vặt. Xem ngay hướng dẫn chi tiết...',
    content: `
      <p>Để máy photocopy hoạt động ổn định, cần:</p>
      <ul>
        <li>Vệ sinh định kỳ các bộ phận quan trọng</li>
        <li>Thay mực, linh kiện đúng loại</li>
        <li>Kiểm tra và cập nhật phần mềm</li>
        <li>Liên hệ kỹ thuật khi có dấu hiệu bất thường</li>
      </ul>
      <p>Bảo trì đúng cách giúp máy bền hơn, tiết kiệm chi phí sửa chữa.</p>
    `
  },
  {
    slug: 'so-sanh-thue-va-mua-may-photocopy-lua-chon-nao-toi-uu',
    title: 'So sánh thuê và mua máy photocopy: Lựa chọn nào tối ưu?',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    date: '2024-05-10',
    excerpt: 'Nên thuê hay mua máy photocopy? Cùng phân tích ưu nhược điểm của từng giải pháp...',
    content: `
      <p><strong>Thuê máy:</strong> Không cần đầu tư lớn, bảo trì miễn phí, linh hoạt nâng cấp.</p>
      <p><strong>Mua máy:</strong> Chủ động sử dụng, tiết kiệm lâu dài, phù hợp doanh nghiệp lớn.</p>
      <p>Hãy cân nhắc nhu cầu và ngân sách để lựa chọn phù hợp.</p>
    `
  },
  // ... thêm các bài viết khác nếu muốn
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h1>
        <Link to="/blog" className="text-primary-600 hover:underline">Quay lại Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title + ' | Blog Zuna Photocopy'}
        description={post.excerpt}
        image={post.image}
        keywords={post.title}
      />
      <div className="max-w-3xl mx-auto py-8 px-4">
        <Link to="/blog" className="text-primary-600 hover:underline mb-4 inline-flex items-center gap-1 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Quay lại Blog
        </Link>
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
            loading="lazy"
          />
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
            <span>🗓 {new Date(post.date).toLocaleDateString('vi-VN')}</span>
            <span>•</span>
            <span>Chuyên mục: <span className="text-primary-600">Tin tức</span></span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{post.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{post.excerpt}</p>
        </div>
        <article 
          className="prose prose-lg prose-headings:text-primary-600 prose-a:text-primary-600 prose-blockquote:border-primary-300 prose-img:rounded-lg prose-ul:list-disc prose-ol:list-decimal prose-strong:text-primary-700 max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        {/* Box tác giả */}
        <div className="flex items-center gap-4 bg-primary-50 rounded-lg p-4 mb-8 shadow-sm">
          <img src="/public/avatar-author.png" alt="Tác giả" className="w-12 h-12 rounded-full object-cover border" />
          <div>
            <div className="font-semibold text-gray-900">Zuna Photocopy</div>
            <div className="text-gray-500 text-sm">Chuyên gia máy photocopy & in ấn</div>
          </div>
        </div>
        {/* Chia sẻ mạng xã hội */}
        <div className="mb-8 flex gap-3 items-center">
          <span className="text-gray-500">Chia sẻ:</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href={`https://zalo.me/share/url?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <img src="/public/zalo-icon.png" alt="Zalo" className="w-6 h-6 inline" />
          </a>
        </div>
        {/* Bài viết liên quan (mock) */}
        <div>
          <h2 className="text-xl font-bold mb-4">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0,2).map(related => (
              <Link to={`/blog/${related.slug}`} key={related.slug} className="block bg-white rounded-lg shadow hover:shadow-md transition p-4">
                <div className="font-semibold text-primary-600 mb-1 line-clamp-1">{related.title}</div>
                <div className="text-gray-500 text-sm line-clamp-2">{related.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail; 
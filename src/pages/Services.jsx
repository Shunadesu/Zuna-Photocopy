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

  export default Services;
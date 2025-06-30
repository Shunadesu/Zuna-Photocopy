import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';
import { Home, Products, BuyProducts, RentProducts, ProductDetail, Services, Cart, Blog, BlogDetail, Contact } from './pages';
import { Toaster } from 'react-hot-toast';
import { Layout, LoginForm, RegisterForm } from './components';

function App() {
  const { currentTheme, setTheme } = useThemeStore();
  useEffect(() => {
    setTheme(currentTheme);
    document.documentElement.classList.remove(
      ...Array.from(document.documentElement.classList).filter(c => c.startsWith('theme-'))
    );
    document.documentElement.classList.add(`theme-${currentTheme}`);
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
          <meta name="theme-color" content="#3b82f6" />
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

export default App; 
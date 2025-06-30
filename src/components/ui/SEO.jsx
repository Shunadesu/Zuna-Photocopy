import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  const fullTitle = title ? `${title} - Zuna Photocopy` : 'Zuna Photocopy - Dịch vụ photocopy chuyên nghiệp';
  const defaultDescription = 'Zuna Photocopy cung cấp dịch vụ photocopy chuyên nghiệp, bán và cho thuê máy photocopy, linh kiện máy photocopy chính hãng với giá cả hợp lý tại TP.HCM. Giao hàng nhanh, bảo hành dài hạn.';
  const defaultKeywords = 'photocopy, máy photocopy, bán máy photocopy, cho thuê máy photocopy, linh kiện máy photocopy, dịch vụ photocopy TP.HCM';
  const defaultImage = 'https://zunaphotocopy.com/og-image.jpg';
  const fullUrl = url ? `https://zunaphotocopy.com${url}` : 'https://zunaphotocopy.com';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Zuna Photocopy" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Zuna Photocopy" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 
// Mapping chính xác giữa tên sản phẩm và category slugs
export const productMapping = {
  // Bán máy photo
  buy: {
    'Máy Photocopy Canon IR-ADV C3530': 'may-photocopy-canon-ir-adv-c3530',
    'Máy Photocopy Canon PIXMA TS8320': 'may-photocopy-canon-pixma-ts8320',
    'Máy Photocopy Ricoh MP C3004': 'may-photocopy-ricoh-mp-c3004',
    'Máy Photocopy HP LaserJet Pro M404n': 'may-photocopy-hp-laserjet-pro-m404n',
    'Máy Photocopy Brother HL-L2350DW': 'may-photocopy-brother-hl-l2350dw',
    'Máy Photocopy Epson EcoTank L3210': 'may-photocopy-epson-ecotank-l3210',
  },
  // Thuê máy photo
  rent: {
    'Thuê Máy Photocopy Canon IR-ADV C3530': 'thue-may-photocopy-canon-ir-adv-c3530',
    'Thuê Máy Photocopy Canon PIXMA': 'thue-may-photocopy-canon-pixma',
    'Thuê Máy Photocopy Ricoh MP C3004': 'thue-may-photocopy-ricoh-mp-c3004',
    'Thuê Máy Photocopy HP LaserJet Pro': 'thue-may-photocopy-hp-laserjet-pro',
    'Thuê Máy Photocopy Brother HL-L2350DW': 'thue-may-photocopy-brother-hl-l2350dw',
    'Thuê Máy Photocopy Epson EcoTank': 'thue-may-photocopy-epson-ecotank',
  }
};

// Lấy product slug từ tên sản phẩm
export const getProductSlug = (productName, type) => {
  return productMapping[type]?.[productName] || null;
};

// Lấy tên sản phẩm từ product slug
export const getProductName = (productSlug, type) => {
  const mapping = productMapping[type];
  for (const [name, slug] of Object.entries(mapping)) {
    if (slug === productSlug) {
      return name;
    }
  }
  return null;
};

// Tạo URL cho sản phẩm
export const getProductUrl = (productName, type) => {
  const productSlug = getProductSlug(productName, type);
  if (!productSlug) return null;
  
  const typePath = type === 'buy' ? 'ban-may-photo' : 'thue-may-photo';
  return `/product/${typePath}/${productSlug}`;
};

// Danh sách sản phẩm theo nhóm
export const productGroups = {
  buy: {
    'MÁY PHOTOCOPY CANON': [
      'Máy Photocopy Canon IR-ADV C3530',
      'Máy Photocopy Canon PIXMA TS8320'
    ],
    'MÁY PHOTOCOPY RICOH': [
      'Máy Photocopy Ricoh MP C3004',
      'Máy Photocopy HP LaserJet Pro M404n'
    ],
    'MÁY IN KHÁC': [
      'Máy Photocopy Brother HL-L2350DW',
      'Máy Photocopy Epson EcoTank L3210'
    ]
  },
  rent: {
    'THUÊ MÁY CANON': [
      'Thuê Máy Photocopy Canon IR-ADV C3530',
      'Thuê Máy Photocopy Canon PIXMA'
    ],
    'THUÊ MÁY RICOH': [
      'Thuê Máy Photocopy Ricoh MP C3004',
      'Thuê Máy Photocopy HP LaserJet Pro'
    ],
    'THUÊ MÁY IN KHÁC': [
      'Thuê Máy Photocopy Brother HL-L2350DW',
      'Thuê Máy Photocopy Epson EcoTank'
    ]
  }
}; 
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => {
        set({ user: userData, isAuthenticated: true });
        toast.success('Đăng nhập thành công!');
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
        toast.success('Đăng xuất thành công!');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isCartDrawerOpen: false,
      openCartDrawer: () => set({ isCartDrawerOpen: true }),
      closeCartDrawer: () => set({ isCartDrawerOpen: false }),
      addItem: (product) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
          toast.success(`Đã cập nhật số lượng ${product.name}`);
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
          toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
        }
      },
      removeItem: (productId) => {
        const { items } = get();
        set({ items: items.filter(item => item.id !== productId) });
        toast.success(`Đã xóa sản phẩm khỏi giỏ hàng`);
      },
      updateQuantity: (productId, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: items.map(item =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          )
        });
        toast.success('Đã cập nhật số lượng sản phẩm');
      },
      clearCart: () => {
        set({ items: [] });
        toast.success('Đã xóa toàn bộ giỏ hàng');
      },
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useProductStore = create((set) => ({
  products: [],
  categories: [],
  loading: false,
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setLoading: (loading) => set({ loading }),
}));

export const useBlogStore = create((set) => ({
  blogs: [],
  loading: false,
  setBlogs: (blogs) => set({ blogs }),
  setLoading: (loading) => set({ loading }),
}));

// Re-export theme store for convenience
export { useThemeStore } from './useThemeStore'; 
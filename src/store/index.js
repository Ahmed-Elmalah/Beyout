import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBuilderStore = create(
  persist(
    (set, get) => ({
      cart: [],
      
      // Action: Add Item
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        if (existingItem) {
          // لو المنتج موجود، زود الكمية
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        // لو جديد، ضيفه
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),

      decreaseQuantity: (productId) => set((state) => {
        const item = state.cart.find((i) => i.id === productId);
        if (item && item.quantity > 1) {
          // لو الكمية أكبر من 1، نقص 1
          return {
            cart: state.cart.map((i) => 
              i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
            )
          };
        } else {
          // لو الكمية 1، احذف المنتج خالص
          return {
            cart: state.cart.filter((i) => i.id !== productId)
          };
        }
      }),

      // Action: Remove Item
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      })),

      // Action: Clear Cart (اختياري لو حبيت تفضي السلة)
      clearCart: () => set({ cart: [] }),

      // Selector: Calculate Total Price (ممكن نستخدمها مباشرة)
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'beyout-builder-storage', // اسم المفتاح في LocalStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
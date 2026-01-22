import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      isDark: true, // القيمة الافتراضية
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: 'theme-storage', // ده الاسم اللي هيتحفظ بيه في الـ LocalStorage
    }
  )
);
import { create } from 'zustand';

import type { ProductType } from '@/data/types';

interface CartState {
  items: ProductType[];
  addItem: (item: ProductType) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.slug !== id) })),
  clearCart: () => set({ items: [] }),
}));

import { create } from 'zustand';

import { products } from '@/data/content';
import type { ProductCartType, ProductType } from '@/data/types';

interface CartState {
  items: ProductCartType[];
  changeQuantity: (slug: string, quantity: number) => void;
  addItem: (item: ProductType) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: products.slice(0, 3).map((p) => ({ product: p, quantity: 1 })),
  changeQuantity: (slug, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.product.slug === slug ? { product: i.product, quantity } : i,
      ),
    })),
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.product.slug === item.slug,
      );
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.product.slug === item.slug
              ? { product: i.product, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }

      return {
        items: [...state.items, { product: item, quantity: 1 }],
      };
    }),
  removeItem: (slug) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.slug !== slug),
    })),
  clearCart: () => set({ items: [] }),
}));

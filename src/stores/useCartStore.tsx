import { create } from 'zustand';

import type { ProductCartType, ProductType } from '@/data/types';

interface CartState {
  items: ProductCartType[];
  changeQuantity: (slug: string, quantity: number) => void;
  addItem: (item: ProductType, quantity?: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  changeQuantity: (slug, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.product.slug === slug ? { product: i.product, quantity } : i,
      ),
    })),
  addItem: (item, quantity = 1) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.product.slug === item.slug,
      );
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.product.slug === item.slug
              ? { product: i.product, quantity: i.quantity + quantity }
              : i,
          ),
        };
      }

      return {
        items: [...state.items, { product: item, quantity }],
      };
    }),
  removeItem: (slug) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.slug !== slug),
    })),
  clearCart: () => set({ items: [] }),
}));

// Persist cart items to local storage
useCartStore.subscribe((state) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }
});

if (typeof window !== 'undefined' && window.localStorage) {
  const storedItems = localStorage.getItem('cartItems');
  if (storedItems) {
    useCartStore.setState({ items: JSON.parse(storedItems) });
  }
}

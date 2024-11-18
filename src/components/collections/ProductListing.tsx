import React from 'react';

import type { ProductType } from '@/data/types';

import ProductCard from '../products/ProductCard';

const ProductListing = ({ productsList }: { productsList: ProductType[] }) => {
  return (
    <div className="grid grid-cols-12 gap-3">
      {productsList.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        />
      ))}
    </div>
  );
};

export default ProductListing;

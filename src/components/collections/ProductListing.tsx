import React from 'react';

import type { ProductType } from '@/data/types';

import ProductCard from '../products/ProductCard';

const ProductListing = ({ productsList }: { productsList: ProductType[] }) => {
  return (
    <div className="grid grid-cols-10 gap-3">
      {productsList.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
          className="col-span-10 md:col-span-5 lg:col-span-2"
        />
      ))}
    </div>
  );
};

export default ProductListing;

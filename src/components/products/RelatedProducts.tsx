import React from 'react';

import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/content';

const relatedProductsSection = ({ category }: { category?: string }) => {
  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  const displayedProducts = category ? filteredProducts : products;

  return (
    <section>
      <div className="pb-24">
        <div className=" mb-6">
          <h2 className="text-2xl font-semibold">Перегляньте схожі товари</h2>
        </div>
        <div>
          <ul className="grid grid-cols-12 gap-3">
            {displayedProducts.slice(0, 3).map((product) => (
              <li
                key={product.name}
                className="col-span-12 md:col-span-4 lg:col-span-2"
              >
                <ProductCard className="w-full" {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default relatedProductsSection;

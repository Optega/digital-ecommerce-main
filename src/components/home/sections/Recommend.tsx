import Link from 'next/link';
import React from 'react';

import ProductCardSmall from '@/components/products/ProductCardSmall';
import { catalogNavLinks, products } from '@/data/content';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const RecommendedSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <h2 className="mb-4 text-lg font-semibold lg:mb-8">
          Рекомендовані товари
        </h2>
        <div className="mb-4">
          <ul className="flex flex-wrap gap-2 lg:gap-3">
            <li>
              <Link href="/collections">
                <ButtonSecondary sizeClass="py-2 px-3">Всі</ButtonSecondary>
              </Link>
            </li>
            {catalogNavLinks.slice(0, 5).map((navItem) => (
              <li key={navItem.id}>
                <Link href={navItem.href}>
                  <ButtonSecondary sizeClass="py-2 px-3">
                    {navItem.name}
                  </ButtonSecondary>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="grid grid-cols-12 gap-2">
            {products.slice(0, 12).map((product) => (
              <li
                key={product.name}
                className="col-span-12 md:col-span-6 xl:col-span-3"
              >
                <ProductCardSmall {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;

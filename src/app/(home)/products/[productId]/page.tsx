'use client';

import { pathOr } from 'ramda';
import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import SectionProduct from '@/components/products/SectionProductHeader';
import { categoriesData, products } from '@/data/content';
import type { ProductType } from '@/data/types';
import ButtonLink from '@/shared/Button/ButtonLink';
import { useCartStore } from '@/stores/useCartStore';

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getProductData = (slug: string) => {
  return products.find((item) => item.slug === slug);
};

const getCategoryData = (title: string) => {
  return categoriesData.find((item) => item.title === title);
};

const page = (props: Props) => {
  const { toggleSide, addItem } = useCartStore();

  const selectedProduct = getProductData(
    pathOr('', ['params', 'productId'], props),
  ) as ProductType;

  const selectedCategory = getCategoryData(
    pathOr('', ['category'], selectedProduct),
  );

  const breadcrumbItems = [
    { title: <ButtonLink href="/">Головна</ButtonLink> },
    {
      title: (
        <ButtonLink
          href={`/collections/${pathOr('', ['slug'], selectedCategory)}`}
        >
          {pathOr('', ['category'], selectedProduct)}
        </ButtonLink>
      ),
    },
    { title: pathOr('', ['name'], selectedProduct) },
  ];

  const handleAddToCart = (quantity: number) => {
    if (selectedProduct) {
      addItem(selectedProduct, quantity);
      toggleSide();
    }
  };

  return (
    <main>
      <div className="container ">
        <div className="mb-6">
          <Breadcrumbs Items={breadcrumbItems} />
        </div>

        <div className="mb-20">
          <SectionProduct
            product={selectedProduct}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </main>
  );
};

export default page;

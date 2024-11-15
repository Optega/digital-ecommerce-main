'use client';

import { pathOr } from 'ramda';
import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import GuideSection from '@/components/home/sections/Guide';
import RelatedProducts from '@/components/products/RelatedProducts';
import SectionProduct from '@/components/products/SectionProductHeader';
import { products } from '@/data/content';
import ButtonLink from '@/shared/Button/ButtonLink';
import { useCartStore } from '@/stores/useCartStore';

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getProductData = (slug: string) => {
  return products.find((item) => item.slug === slug);
};

const page = (props: Props) => {
  const { addItem } = useCartStore();

  const selectedProduct = getProductData(
    pathOr('', ['params', 'productId'], props),
  );

  const breadcrumbItems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    {
      title: (
        <ButtonLink
          href={`/collections/${pathOr('', ['category'], selectedProduct)}`}
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
            name={pathOr('', ['name'], selectedProduct)}
            shots={pathOr([], ['shots'], selectedProduct)}
            prevPrice={pathOr(0, ['previousPrice'], selectedProduct)}
            currentPrice={pathOr(0, ['currentPrice'], selectedProduct)}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <RelatedProducts />
      <GuideSection />
    </main>
  );
};

export default page;

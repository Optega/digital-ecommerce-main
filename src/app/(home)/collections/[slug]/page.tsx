'use client';

import { pathOr } from 'ramda';
import type { FC } from 'react';
import React, { useState } from 'react';

import CollectionHeader from '@/components/collections/CollectionHeader';
import CollectionFilter from '@/components/collections/Filter';
import FilterSortBar from '@/components/collections/FilterSortBar';
import ProductListing from '@/components/collections/ProductListing';
import CollectionSorter from '@/components/collections/Sorter';
import BenefitsSection from '@/components/home/sections/Benefits';
import CategoriesSection from '@/components/home/sections/Categories';
import { categoriesData, products } from '@/data/content';
import type { ProductType } from '@/data/types';

type PageProps = {
  params: { slug: string };
};
const CollectionPage: FC<PageProps> = ({ params }) => {
  const slug = pathOr('', ['slug'], params);

  const catalogData = categoriesData.find((item) => item.slug === slug);
  const productsList = products.filter(
    (item) => item.category.toLowerCase() === catalogData?.title.toLowerCase(),
  ) as ProductType[];
  const [filteredList, setFilteredList] = useState(productsList);

  const handleFilter = (newProductsList: ProductType[]) =>
    setFilteredList(newProductsList);

  return (
    <main className="pb-24">
      {catalogData && (
        <CollectionHeader
          title={catalogData.title}
          bannerImg={catalogData.bannerUrl}
        />
      )}

      <CollectionSorter count={filteredList.length} />
      <div className="container pb-8 lg:pb-24">
        <div className="mb-3 lg:hidden">
          <FilterSortBar productsList={filteredList} />
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="hidden md:col-span-5 md:block lg:col-span-3">
            <CollectionFilter
              productsList={productsList}
              onChangeAnyFilter={handleFilter}
            />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-9">
            <ProductListing productsList={filteredList} />
          </div>
        </div>
      </div>
      <CategoriesSection />
      <BenefitsSection />
    </main>
  );
};

export default CollectionPage;

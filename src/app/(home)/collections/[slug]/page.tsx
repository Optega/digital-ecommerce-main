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

  const handleSort = (sortKey: string) => {
    if (sortKey === 'reviews') {
      setFilteredList([...filteredList].sort((a, b) => b.reviews - a.reviews));
    } else if (sortKey === 'rating') {
      setFilteredList([...filteredList].sort((a, b) => b.rating - a.rating));
    } else if (sortKey === 'currentPrice') {
      setFilteredList(
        [...filteredList].sort((a, b) => a.currentPrice - b.currentPrice),
      );
    } else if (sortKey === 'name') {
      setFilteredList(
        [...filteredList].sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
  };

  return (
    <main className="pb-24">
      {catalogData && (
        <CollectionHeader
          title={catalogData.title}
          bannerImg={catalogData.bannerUrl}
        />
      )}

      <CollectionSorter count={filteredList.length} handleSort={handleSort} />
      <div className="container pb-8 lg:pb-24">
        <div className="mb-3 lg:hidden">
          <FilterSortBar
            productsList={productsList}
            count={filteredList.length}
            onChangeAnyFilter={handleFilter}
            handleSort={handleSort}
          />
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="hidden lg:col-span-3 lg:block">
            <CollectionFilter
              productsList={productsList}
              onChangeAnyFilter={handleFilter}
            />
          </div>
          <div className="col-span-12 lg:col-span-9">
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

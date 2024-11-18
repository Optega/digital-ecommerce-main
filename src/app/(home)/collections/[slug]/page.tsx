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

const sortData = [
  { key: 'reviews', label: 'Популярні' },
  { key: 'rating', label: 'Рейтинг' },
  { key: 'currentPrice', label: 'Ціна' },
  { key: 'name', label: 'Назва' },
];

type PageProps = {
  params: { slug: string };
};
const CollectionPage: FC<PageProps> = ({ params }) => {
  const slug = pathOr('', ['slug'], params);
  const [activeSortKey, setActiveSortKey] = useState(sortData[0]?.key || '');

  const catalogData = categoriesData.find((item) => item.slug === slug);
  const productsList = products.filter(
    (item) => item.category.toLowerCase() === catalogData?.title.toLowerCase(),
  ) as ProductType[];
  const [filteredList, setFilteredList] = useState(productsList);

  const handleSort = (sortKey: string, productList = filteredList) => {
    if (sortKey === 'reviews') {
      setFilteredList([...productList].sort((a, b) => b.reviews - a.reviews));
    } else if (sortKey === 'rating') {
      setFilteredList([...productList].sort((a, b) => b.rating - a.rating));
    } else if (sortKey === 'currentPrice') {
      setFilteredList(
        [...productList].sort((a, b) => a.currentPrice - b.currentPrice),
      );
    } else if (sortKey === 'name') {
      setFilteredList(
        [...productList].sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
  };

  const handleFilter = (newProductsList: ProductType[]) => {
    setFilteredList(newProductsList);
    handleSort(activeSortKey, newProductsList);
  };

  return (
    <main className="pb-24">
      {catalogData && (
        <CollectionHeader
          title={catalogData.title}
          bannerImg={catalogData.bannerUrl}
        />
      )}

      <CollectionSorter
        count={filteredList.length}
        sortData={sortData}
        activeSortKey={activeSortKey}
        setActiveSortKey={setActiveSortKey}
        handleSort={handleSort}
      />
      <div className="container pb-8 lg:pb-24">
        <div className="mb-3 lg:hidden">
          <FilterSortBar
            productsList={productsList}
            count={filteredList.length}
            onChangeAnyFilter={handleFilter}
            sortData={sortData}
            activeSortKey={activeSortKey}
            setActiveSortKey={setActiveSortKey}
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

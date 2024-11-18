'use client';

import 'rc-slider/assets/index.css';

import { pathOr } from 'ramda';
import Slider from 'rc-slider';
import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect, useState } from 'react';

import type { ProductType } from '@/data/types';
import Button from '@/shared/Button/Button';

const SidebarFilters = ({
  productsList,
  onChangeAnyFilter,
}: {
  productsList: ProductType[];
  onChangeAnyFilter?: (products: ProductType[]) => void;
}) => {
  const existingBrands = productsList.map((product) => product.brand);
  const existingCategories = Array.from(
    new Set(productsList.map((product) => product.category)),
  );
  const avaiablitiy = ['В наявності', 'Немає в наявності'];
  const PRICE_RANGE = productsList.reduce<[number, number]>(
    (acc, product) => {
      if (product.currentPrice < acc[0]) {
        acc[0] = product.currentPrice; // Update min price
      }
      if (product.currentPrice > acc[1]) {
        acc[1] = product.currentPrice; // Update max price
      }
      return acc;
    },
    [Infinity, -Infinity], // Initialize with extremes
  );

  const [rangePrices, setRangePrices] = useState(PRICE_RANGE);
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [activeStock, setActiveStock] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string[]>(
    existingCategories[0] ? [existingCategories[0]] : [],
  );

  useEffect(
    (
      brands = activeBrands,
      categories = activeCategory,
      stockState = activeStock,
      prices = rangePrices,
    ) => {
      const newProductList = productsList.filter((product) => {
        const isBrand = brands.length === 0 || brands.includes(product.brand);
        const isCategory =
          categories.length === 0 || categories.includes(product.category);
        const inStock =
          stockState.length === 0 ||
          stockState.length === 2 ||
          (product.inStock &&
            (stockState[0] === 'В наявності' ? product.inStock > 0 : true)) ||
          (!product.inStock && stockState[0] === 'Немає в наявності');
        const isPrice =
          product.currentPrice >= prices[0] &&
          product.currentPrice <= prices[1];

        return isBrand && isCategory && inStock && isPrice;
      });

      if (onChangeAnyFilter) {
        onChangeAnyFilter(newProductList);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeBrands, activeCategory, activeStock, rangePrices],
  );

  const handleToggleFilter = ({
    value,
    valueArray,
    setValueArray,
  }: {
    value: string;
    valueArray: string[];
    setValueArray: Dispatch<SetStateAction<string[]>>;
  }) => {
    if (valueArray.includes(value)) {
      const filteredArray = valueArray.filter(
        (arrayItem) => arrayItem !== value,
      );
      setValueArray(filteredArray);
    } else {
      setValueArray((prev) => [...prev, value]);
    }
  };

  // OK
  const renderTabsBrands = () => {
    const [activeTab, setActiveTab] = useState(true);
    return (
      <div className="relative flex flex-col p-5">
        <div className="flex justify-between">
          <button
            type="button"
            className=" font-medium"
            onClick={() => setActiveTab((prev) => !prev)}
          >
            Бренд
          </button>
          <span>
            <Button
              className="text-neutral-500 underline dark:text-neutral-300"
              onClick={() => setActiveBrands([])}
            >
              Скинути
            </Button>
          </span>
        </div>
        <ul
          className={`space-y-2 overflow-hidden  ${activeTab ? 'h-auto p-2 pt-4' : 'h-0'}`}
        >
          {existingBrands.map((brand) => (
            <li key={brand} className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id={brand}
                checked={activeBrands.includes(brand)}
                onChange={() =>
                  handleToggleFilter({
                    value: brand,
                    valueArray: activeBrands,
                    setValueArray: setActiveBrands,
                  })
                }
                className="size-6 appearance-none rounded-sm border-2 border-neutral-300 checked:bg-primary dark:border-neutral-600 dark:bg-neutral-800"
              />
              <label htmlFor={brand} className="capitalize">
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // OK
  const renderTabsCategories = () => {
    const [activeTab, setActiveTab] = useState(true);
    return (
      <div className="relative flex flex-col p-5">
        <div className="flex justify-between">
          <button
            type="button"
            className="font-medium"
            onClick={() => setActiveTab((prev) => !prev)}
          >
            Категорія
          </button>
          <span>
            <Button
              className="text-neutral-500 underline dark:text-neutral-300"
              onClick={() => setActiveCategory([])}
            >
              Скинути
            </Button>
          </span>
        </div>
        <ul
          className={`space-y-2 overflow-hidden  ${activeTab ? 'h-auto p-2 pt-4' : 'h-0'}`}
        >
          {existingCategories.map((product) => (
            <li key={product} className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id={product}
                checked={activeCategory.includes(product)}
                onChange={() =>
                  handleToggleFilter({
                    value: product,
                    valueArray: activeCategory,
                    setValueArray: setActiveCategory,
                  })
                }
                className="size-6 appearance-none rounded-sm border-2 border-neutral-300 checked:bg-primary dark:border-neutral-600 dark:bg-neutral-800"
              />
              <label htmlFor={product} className="capitalize">
                {product}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // OK
  const renderTabsAvaiability = () => {
    const [activeTab, setActiveTab] = useState(true);
    return (
      <div className="relative flex flex-col p-5">
        <div className="flex justify-between">
          <button
            type="button"
            className=" font-medium"
            onClick={() => setActiveTab((prev) => !prev)}
          >
            Наявність
          </button>
          <span>
            <Button
              className="text-neutral-500 underline dark:text-neutral-300"
              onClick={() => setActiveStock([])}
            >
              Скинути
            </Button>
          </span>
        </div>
        <ul
          className={`space-y-2 overflow-hidden  ${activeTab ? 'h-auto p-2 pt-4' : 'h-0'}`}
        >
          {avaiablitiy.map((item) => {
            return (
              <li key={item} className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  id={item}
                  checked={activeStock.includes(item)}
                  onChange={() =>
                    handleToggleFilter({
                      value: item,
                      valueArray: activeStock,
                      setValueArray: setActiveStock,
                    })
                  }
                  className="size-6 appearance-none rounded-sm border-2 border-neutral-300 checked:bg-primary dark:border-neutral-600 dark:bg-neutral-800"
                />
                <label htmlFor={item}>{item}</label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // OK
  const renderTabsPriceRage = () => {
    const [activeTab, setActiveTab] = useState(true);

    return (
      <div className="relative flex flex-col space-y-5 p-5">
        <div className="space-y-5">
          <div className="flex justify-between">
            <button
              type="button"
              className="font-medium"
              onClick={() => setActiveTab((prev) => !prev)}
            >
              Ціна
            </button>
            <span>
              <Button
                className="text-neutral-500 underline dark:text-neutral-300"
                onClick={() => {
                  setRangePrices(PRICE_RANGE);
                }}
              >
                Скинути
              </Button>
            </span>
          </div>
          <div
            className={`space-y-2 overflow-hidden ${activeTab ? 'h-auto p-2 pt-4' : 'h-0'}`}
          >
            <Slider
              className=""
              range
              min={PRICE_RANGE[0]}
              max={PRICE_RANGE[1]}
              step={1}
              defaultValue={[
                pathOr(0, [0], rangePrices),
                pathOr(0, [1], rangePrices),
              ]}
              allowCross={false}
              value={rangePrices}
              onChange={(_input: number | number[]) =>
                setRangePrices(_input as [number, number])
              }
            />
            <span className="mt-2 text-sm text-neutral-500">
              Ціна: ₴{PRICE_RANGE[0]} - ₴{PRICE_RANGE[1]}{' '}
            </span>
            <div className="flex justify-between space-x-5">
              <div>
                <div className="relative mt-1 rounded-md">
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                    ₴
                  </span>
                  <input
                    type="text"
                    name="minPrice"
                    id="minPrice"
                    className="block w-full rounded-md border-neutral-300 bg-transparent p-3 sm:text-sm"
                    value={rangePrices[0]}
                    onChange={(e) =>
                      setRangePrices([
                        parseInt(e.target.value, 10),
                        rangePrices[1],
                      ])
                    }
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-1 rounded-md">
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                    ₴
                  </span>
                  <input
                    type="text"
                    name="maxPrice"
                    id="maxPrice"
                    className="block w-full rounded-md border-neutral-300 bg-transparent p-3 sm:text-sm"
                    value={rangePrices[1]}
                    onChange={(e) =>
                      setRangePrices([
                        rangePrices[0],
                        parseInt(e.target.value, 10),
                      ])
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-md bg-white dark:bg-neutral-900">
      <div className="divide-y divide-neutral-300 dark:divide-neutral-600">
        {renderTabsBrands()}
        {renderTabsPriceRage()}
        {renderTabsCategories()}
        {renderTabsAvaiability()}
      </div>
    </div>
  );
};

export default SidebarFilters;

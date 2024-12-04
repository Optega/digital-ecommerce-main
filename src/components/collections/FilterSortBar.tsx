'use client';

import { Dialog, Transition } from '@headlessui/react';
import { pathOr } from 'ramda';
import Slider from 'rc-slider';
import type { Dispatch, SetStateAction } from 'react';
import React, { Fragment, useEffect, useState } from 'react';
import { AiOutlineControl } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import type { ProductType } from '@/data/types';
import Button from '@/shared/Button/Button';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

import Sorter from '../Sorter';

const FilterSortBar = ({
  productsList,
  count,
  sortData,
  activeSortKey,
  setActiveSortKey,
  onChangeAnyFilter,
  handleSort = () => {},
}: {
  productsList: ProductType[];
  count: number;
  onChangeAnyFilter?: (products: ProductType[]) => void;
  sortData: { key: string; label: string }[];
  handleSort?: (sortKey: string) => void;
  activeSortKey: string;
  setActiveSortKey: (key: string) => void;
}) => {
  const [isVisable, setIsVisable] = useState(false);

  const existingBrands = Array.from(
    new Set(productsList.map((product) => product.brand)),
  );
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

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

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
    // const [activeTab, setActiveTab] = useState(true);
    return (
      <div>
        {/* <div className="relative flex flex-col p-5">
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
        </div> */}
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
                <label htmlFor={item} className="capitalize">
                  {item}
                </label>
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
      <div className="relative flex flex-col space-y-5 p-5 pb-2">
        <div className="space-y-2">
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

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="relative z-20">
                <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                  <div className="relative h-screen bg-white dark:bg-gray">
                    <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Фільтр та сортування
                          </h3>
                          <span className="text-sm font-normal">
                            Знайдено товарів: {count}
                          </span>
                        </div>
                        <ButtonCircle3 onClick={handleCloseMenu}>
                          <MdClose className="text-2xl" />
                        </ButtonCircle3>
                      </div>
                      <div className="divide-y divide-neutral-300">
                        <div className="my-4">
                          <span>Сортування</span>
                          <Sorter
                            sortData={sortData}
                            activeSortKey={activeSortKey}
                            setActiveSortKey={setActiveSortKey}
                            handleSort={handleSort}
                          />
                        </div>
                        {renderTabsBrands()}
                        {renderTabsPriceRage()}
                        {renderTabsCategories()}
                        {renderTabsAvaiability()}
                      </div>
                      <div className="  w-full  p-5">
                        <div className="mt-5 flex flex-col items-center gap-4">
                          <ButtonPrimary
                            onClick={handleCloseMenu}
                            className="w-full"
                          >
                            Застосувати
                          </ButtonPrimary>
                          <ButtonSecondary
                            className="w-full"
                            onClick={() => {
                              setActiveBrands([]);
                              setActiveCategory([]);
                              setActiveStock([]);
                              setRangePrices(PRICE_RANGE);
                              handleCloseMenu();
                            }}
                          >
                            Скинути
                          </ButtonSecondary>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <ButtonPrimary onClick={handleOpenMenu} className="w-full">
        <AiOutlineControl /> Фільтр та сортування
      </ButtonPrimary>

      {renderContent()}
    </>
  );
};

export default FilterSortBar;

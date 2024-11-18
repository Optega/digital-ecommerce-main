'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const sortData = [
  { key: 1, value: 'BestSelling', label: 'Популярні' },
  { key: 2, value: 'Featured', label: 'Рекомендовані' },
  { key: 3, value: 'Date', label: 'Дата' },
  { key: 4, value: 'Price', label: 'Ціна' },
  { key: 5, value: 'A-Z', label: 'Назва A-Z' },
  { key: 6, value: 'Z-A', label: 'Назва Z-A' },
];

const Sorter = () => {
  const [activeSortKey, setActiveSortKey] = useState(1);

  return (
    <div className=" font-medium ">
      <Popover as="div" className="relative inline-block w-full">
        <Popover.Button className="border-primary/15 flex w-full items-center justify-between gap-2 rounded border px-5 py-4 lg:min-w-60 dark:border-white/15">
          <span className="inline-flex flex-col leading-tight">
            <span>
              {
                sortData.find((language) => language.key === activeSortKey)
                  ?.label
              }
            </span>
          </span>
          <span className="flex size-4 items-center justify-center">
            <MdKeyboardArrowDown className="" />
          </span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel className="absolute bottom-9 left-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-neutral-900">
            <div className="flex flex-col">
              {sortData.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveSortKey(item.key)}
                  className="w-full px-3 py-1 text-left text-sm focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Sorter;

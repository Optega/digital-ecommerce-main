import React from 'react';

import Sorter from '../Sorter';

const CollectionSorter = ({
  count = 0,
  sortData,
  activeSortKey,
  setActiveSortKey,
  handleSort = () => {},
}: {
  count?: number;
  sortData: { key: string; label: string }[];
  handleSort?: (sortKey: string) => void;
  activeSortKey: string;
  setActiveSortKey: (key: string) => void;
}) => {
  return (
    <section className="hidden lg:block">
      <div className="container pb-10">
        <div className="flex items-center justify-end gap-6">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Знайдено товарів: {count}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span>Сортування:</span>
            <Sorter
              sortData={sortData}
              activeSortKey={activeSortKey}
              setActiveSortKey={setActiveSortKey}
              handleSort={handleSort}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSorter;

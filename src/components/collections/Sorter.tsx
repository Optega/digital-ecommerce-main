import React from 'react';

import Sorter from '../Sorter';

const CollectionSorter = ({ count = 0 }: { count?: number }) => {
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
            <Sorter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSorter;

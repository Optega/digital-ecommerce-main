import type { ProductCharacteristics } from '@/data/types';

import ProductCharacteristicsTab from './ProductCharacteristicsTab';
import ProductDescriptiontab from './ProductDescriptiontab';

const ProductTabs = ({
  description,
  characteristics,
}: {
  description: string;
  characteristics: ProductCharacteristics[];
}) => {
  return (
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">Про товар</h3>
      <div className="divide-primary/20 border-primary/20 divide-y border-y dark:divide-neutral-300 dark:border-neutral-300">
        <ProductDescriptiontab description={description} />
        <ProductCharacteristicsTab characteristics={characteristics} />
      </div>
    </div>
  );
};

export default ProductTabs;

import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';
import { HiMiniArrowUturnLeft } from 'react-icons/hi2';
import { LuTruck } from 'react-icons/lu';

import ColorPicker from '@/components/ColorPicker';
import ImageShowCase from '@/components/ImageShowCase';
// import ProductCard from "@/components/products/ProductCard";
import ProductSlider from '@/components/products/ProductSlider';
import ProductTabs from '@/components/products/ProductTabs';
import { products } from '@/data/content';
import type { ProductType } from '@/data/types';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import InputNumber from '@/shared/InputNumber/InputNumber';

interface SectionProductHeaderProps {
  product: ProductType;
  handleAddToCart?: (quantity: number) => void;
}

const SectionProduct: FC<SectionProductHeaderProps> = ({
  product,
  handleAddToCart = () => {},
}) => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-8">
        <ImageShowCase shots={product.shots} />
        <div className="hidden md:block">
          <ProductTabs
            description={product.overview}
            characteristics={product.characterData}
          />
          <ProductSlider
            products={products
              .filter((p) => p.category === product.category)
              .slice(0, 7)}
            title="Перегляньте схожі товари"
            subText="Товари, які можуть вас зацікавити"
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <span className="mb-2 text-xs">TECHMART</span>
        <h1 className="mb-0 text-3xl font-bold">{product.name}</h1>

        <div className="mb-2 space-y-1">
          <h1 className="text-2xl font-semibold">
            <span className="text-green-700">₴{product.currentPrice}</span>{' '}
            {product.onSale && (
              <span className=" text-neutral-500 line-through">
                ₴{product.previousPrice}
              </span>
            )}
          </h1>
          {/* <p className="text-sm">Tax included.</p> */}
        </div>

        <div className="flex gap-2 py-4">
          <div>
            <BsLightningCharge />
          </div>
          <div>
            {/* eslint-disable-next-line no-nested-ternary */}
            {product.inStock ? (
              <h3 className="text-sm text-green-600">
                {product.inStock} в наявності
              </h3>
            ) : product.inStock === 0 ? (
              <h3 className="text-sm text-red-600">Немає в наявності</h3>
            ) : (
              <h3 className="text-sm text-red-600">Очікується поставка</h3>
            )}
          </div>
        </div>

        {/* <div className="mb-6">
          <p className="text-neutral-500 dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nemo cumque odit illo expedita ut magnam quisquam id, nam ea modi
            veritatis repellat ex excepturi ipsum, aperiam aliquam eaque ab?
          </p>
        </div> */}

        {product.colorOptions && (
          <div className="mb-6">
            <h4 className="text-sm">Колір:</h4>
            <ColorPicker colors={product.colorOptions} />
          </div>
        )}

        <div className="">
          <h4 className="text-sm">Кількість:</h4>
          <div className="flex gap-2">
            <InputNumber
              defaultValue={quantity}
              onChange={(q) => setQuantity(q)}
            />
            <ButtonSecondary
              className="w-full"
              onClick={() => {
                handleAddToCart(quantity);
              }}
            >
              Додати в кошик
            </ButtonSecondary>
          </div>
        </div>

        <div className="mb-5 mt-2 flex items-center gap-5">
          <Link className="w-full" href="/checkout">
            <ButtonPrimary
              className="w-full"
              onClick={() => {
                handleAddToCart(quantity);
              }}
            >
              Купити зараз
            </ButtonPrimary>
          </Link>
        </div>

        <div className="mb-6 flex">
          <div className="p-1 text-green-700">
            <FaCheck />
          </div>
          <div>
            <p>Самовивіз можливий з нашого магазину</p>
            <p className="mb-1">Зазвичай очікування до 24 годин</p>
            <p className="text-sm">Перегляньте інформацію про магазин</p>
          </div>
        </div>

        <div className="divide-y divide-neutral-300  dark:divide-neutral-400">
          <div className="flex gap-4 py-4">
            <div>
              <LuTruck />
            </div>
            <div>
              <h3 className="flex items-start gap-2 text-sm font-semibold">
                <span className="inline-block">Відправка наступного дня</span>{' '}
              </h3>
              <p className="text-neutral-500  dark:text-neutral-300">
                Блискавична доставка, гарантована.
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <div className="text-primary  dark:text-white">
              <HiMiniArrowUturnLeft />
            </div>
            <div>
              <h3 className="text-sm  font-semibold text-primary dark:text-white">
                Безкоштовне повернення протягом 14 днів
              </h3>
              <p className="text-neutral-500  dark:text-neutral-300">
                Купуйте без ризику з легким поверненням.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mb-8 flex items-center justify-between gap-4 rounded-md  border-2 border-blue-600 px-9 py-4 dark:border-neutral-400">
          <div>
            <h3 className="text-sm font-semibold">Packaging Note:</h3>
            <p className="text-neutral-500  dark:text-neutral-300">
              Research and development value proposition graphical user
              interface investor. Startup business plan user experience
            </p>
          </div>
          <div className="text-primary">
            <LuInfo />
          </div>
        </div> */}

        {/* <div className="bg-primary mb-8 rounded-md px-10 py-4 text-white">
          <div>
            <span className="mb-5 inline-block">TechMart</span>
            <h3 className="font-semibold">
              Discount & Free shipping on Your first purchase.
            </h3>
            <Button href="/" className="text-yellow-500">
              {` First-Timer's Deal`}
            </Button>
          </div>
        </div> */}
      </div>

      <div className="col-span-12 md:hidden">
        <ProductTabs
          description={product.overview}
          characteristics={product.characterData}
        />
        <ProductSlider
          products={products
            .filter((p) => p.category === product.category)
            .slice(0, 7)}
          title="Перегляньте схожі товари"
          subText="Товари, які можуть вас зацікавити"
        />
      </div>
    </div>
  );
};

export default SectionProduct;

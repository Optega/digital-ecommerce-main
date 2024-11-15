'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { ProductCartType } from '@/data/types';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import { useCartStore } from '@/stores/useCartStore';

import ContactInfo from '../../components/checkout/ContactInfo';
import ShippingAddress from '../../components/checkout/ShippingAddress';

const CheckoutPage = () => {
  const { items } = useCartStore();
  const shippingCost = 0;

  const [tabActive, setTabActive] = useState<
    'ContactInfo' | 'ShippingAddress' | 'PaymentMethod'
  >('ShippingAddress');

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const getSubTotal = () => {
    return items.reduce(
      (acc, item) => acc + item.product.currentPrice * item.quantity,
      0,
    );
  };

  const renderProduct = (item: ProductCartType) => {
    const { name, coverImage, currentPrice, slug, category } = item.product;

    return (
      <div key={name} className="flex gap-2">
        <div className="relative size-16 overflow-hidden rounded-xl">
          <Image
            fill
            src={coverImage}
            alt={name}
            className="size-full object-contain object-center"
          />
          <Link className="absolute inset-0" href={`/products/${slug}`} />
        </div>

        <div className="flex grow items-center justify-between">
          <div>
            <h3 className="text-sm font-medium leading-tight">
              <Link href={`/products/${slug}`}>{name}</Link>
            </h3>
            <span className="text-xs text-neutral-500">{category}</span>
          </div>
          <div>
            <span className="text-sm">₴{currentPrice}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => {
    return (
      <div className="space-y-9">
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress
            isActive={tabActive === 'ShippingAddress'}
            onOpenActive={() => {
              setTabActive('ShippingAddress');
              handleScrollToEl('ShippingAddress');
            }}
            onCloseActive={() => {
              setTabActive('PaymentMethod');
              handleScrollToEl('PaymentMethod');
            }}
          />
        </div>

        {/* <div id="PaymentMethod" className="scroll-mt-24">
          <PaymentMethod
            isActive={tabActive === 'PaymentMethod'}
            onOpenActive={() => {
              setTabActive('PaymentMethod');
              handleScrollToEl('PaymentMethod');
            }}
            onCloseActive={() => setTabActive('PaymentMethod')}
          />
        </div> */}

        <div className="hidden pt-6 lg:block">
          <ButtonPrimary className="w-full">Оплатити</ButtonPrimary>
        </div>

        <div className="hidden border-t border-neutral-300  pt-4 dark:border-neutral-600 lg:block">
          <p className="text-sm text-neutral-500">
            Усі права захищені TechMart
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-CheckoutPage relative">
      <div className="absolute left-0 top-0 -z-10 size-full border-neutral-200 bg-white p-4 dark:border-neutral-600 dark:bg-neutral-900 lg:w-1/2 lg:border-r" />
      <main className="container pb-8 lg:pb-28 ">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full pt-4 lg:basis-1/2 lg:p-9">{renderLeft()}</div>

          <div className="relative w-full lg:basis-1/2">
            <div className="sticky top-0 pt-4 lg:p-9">
              <div className="space-y-2">
                {items.map((item) => renderProduct(item))}
              </div>

              <div className="mt-10 border-t border-neutral-300 pt-6 text-sm dark:border-neutral-600">
                {/* <div className="mt-4 flex justify-between">
                  <span>Сума</span>
                  <span className="font-semibold">₴{getSubTotal()}</span>
                </div> */}
                {/* <div className="mt-2 flex justify-between">
                  <span>Доставка</span>
                  <span className="font-semibold">₴{shippingCost}</span>
                </div> */}
                <div className="mt-2 flex justify-between text-lg font-semibold">
                  <span>Всього</span>
                  <span>₴{getSubTotal() + shippingCost}</span>
                </div>
              </div>
              <ButtonPrimary className="mt-8 w-full lg:hidden">
                Оплатити
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-neutral-300 pt-4  dark:border-neutral-600 lg:hidden">
          <p className="text-sm text-neutral-500">
            Усі права захищені TechMart
          </p>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;

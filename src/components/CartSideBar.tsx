'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';

import type { ProductCartType } from '@/data/types';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonLink from '@/shared/Button/ButtonLink';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import InputNumber from '@/shared/InputNumber/InputNumber';
import { useCartStore } from '@/stores/useCartStore';

export interface CartSideBarProps {}
const CartSideBar: React.FC<CartSideBarProps> = () => {
  const { openSide, setOpenSide, items, changeQuantity, removeItem } =
    useCartStore();

  const handleOpenMenu = () => setOpenSide(true);
  const handleCloseMenu = () => setOpenSide(false);

  const getSubTotal = () => {
    return items.reduce(
      (acc, item) => acc + item.product.currentPrice * item.quantity,
      0,
    );
  };

  const getQuantity = () => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handleChangeQuantity = (item: ProductCartType) => {
    changeQuantity(item.product.slug, item.quantity);
  };

  const handleRemoveItem = (slug: string) => {
    removeItem(slug);
  };

  const renderProduct = (item: ProductCartType) => {
    const { name, coverImage, currentPrice, slug, sku } = item.product;

    return (
      <div key={name} className="flex gap-5 py-5 last:pb-0">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
          <Image
            fill
            src={coverImage}
            alt={name}
            className="size-full object-contain object-center"
          />
          <Link
            onClick={handleCloseMenu}
            className="absolute inset-0"
            href={`/products/${slug}`}
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="line-clamp-1 text-ellipsis font-medium">
                <Link onClick={handleCloseMenu} href={`/products/${slug}`}>
                  {name}
                </Link>
              </h3>
              <span className=" font-medium">
                ₴{currentPrice * item.quantity}
              </span>
            </div>
            <div>
              <InputNumber
                defaultValue={item.quantity}
                onChange={(value) =>
                  handleChangeQuantity({ ...item, quantity: value })
                }
                className="h-10"
              />
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div>
              <span className="text-gray">SKU: {sku}</span>
            </div>
            <div className="flex items-center gap-3">
              <ButtonLink onClick={() => handleRemoveItem(slug)}>
                Видалити
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <Transition appear show={openSide} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max fixed inset-y-5 right-5 w-full max-w-md outline-none focus:outline-none md:max-w-[486px]">
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="relative z-20 h-full">
                <div className="h-full overflow-hidden shadow-lg ring-1 ring-black/5">
                  <div className="relative h-full rounded-md bg-white dark:bg-gray">
                    <div className="hiddenScrollbar h-full overflow-y-auto p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-semibold">
                          Кошик{' '}
                          {/* <span className="text-sm font-normal">2 items</span> */}
                        </h3>
                        <ButtonCircle3 onClick={handleCloseMenu}>
                          <MdClose className="text-2xl" />
                        </ButtonCircle3>
                      </div>
                      <div className="divide-y divide-neutral-300">
                        {items.map((item) => renderProduct(item))}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full  p-5">
                      <div className=" bg-neutral-100 p-6 dark:bg-neutral-800">
                        <span className="flex justify-between font-medium">
                          <span className="">Всього</span>
                          <span className="">₴{getSubTotal()}</span>
                        </span>
                        {/* <p className="block w-2/3 text-sm text-neutral-500">
                          Tax included and Shipping and taxes calculated at
                          checkout.
                        </p> */}
                      </div>
                      <div className="mt-5 flex flex-col items-center gap-4">
                        <ButtonPrimary
                          onClick={handleCloseMenu}
                          className="w-full"
                          href="/checkout"
                        >
                          Оформити замовлення
                        </ButtonPrimary>
                        <ButtonSecondary
                          onClick={handleCloseMenu}
                          href="/cart"
                          className="w-fit text-center"
                        >
                          Переглянути кошик
                        </ButtonSecondary>
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
      <button
        type="button"
        onClick={handleOpenMenu}
        className="relative mx-5 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span className="absolute -top-1/4 left-3/4 inline-block aspect-square size-4 rounded-full bg-primary text-[10px] text-white">
          {getQuantity()}
        </span>
        <CiShoppingCart size={24} />
      </button>

      {renderContent()}
    </>
  );
};

export default CartSideBar;

import Image from 'next/image';
import Link from 'next/link';
import { pathOr } from 'ramda';
import React from 'react';

import LanguageLarge from '@/components/LanguageLarge';
import { catalogNavLinks, paymentsData, topNavLinks2 } from '@/data/content';

import Logo from '../Logo/Logo';
import Subscribe from './Subscribe';

const FooterBottom = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="flex flex-col flex-wrap gap-y-6 lg:flex-row lg:items-center lg:justify-between xl:flex-nowrap">
        <div className="order-2 flex w-full flex-row items-center justify-between gap-y-4 lg:order-1 lg:flex-col xl:w-fit">
          <div className="col-span-12 text-sm lg:col-span-3">
            <Logo className="block" />
            <p className="text-sm">
              &copy; Copyright. <span>TechMart</span>
            </p>
            <p className="text-sm">
              {new Date().getFullYear()} <span>by Devsphere labs</span>
            </p>
          </div>
          <div className="">
            <LanguageLarge />
          </div>
          <div className="">
            <h4 className="text-sm dark:text-neutral-300">Ми приймаємо:</h4>
            <ul className="flex gap-4">
              {paymentsData.map((listItem) => (
                <li key={listItem.title}>
                  <Link
                    className="relative text-lg"
                    href={pathOr('#', ['href'], listItem)}
                  >
                    <Image
                      src={listItem.Icon}
                      alt="payement logo"
                      width={24}
                      className="object-contain"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="mt-4 lg:mt-0 lg:pl-9">
            <h4 className="text-sm dark:text-neutral-300">Follow Us</h4>
            <ul className="flex gap-4">
              {socialLinks.map((listItem) => (
                <li key={listItem.title}>
                  <Link
                    className="text-lg"
                    href={pathOr('#', ['href'], listItem)}
                  >
                    {pathOr('', ['Icon'], listItem)}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="order-1 flex w-full flex-row justify-around lg:order-2">
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h4 className="mb-2 font-medium">Сторінки</h4>
            {topNavLinks2.map((link) => (
              <div key={link.name} className="text-sm">
                <Link href={link.href} className="underline">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h4 className="mb-2 font-medium">Категорії</h4>
            {catalogNavLinks.map((link) => (
              <div key={link.name} className="text-sm">
                <Link href={link.href} className="underline">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="order-last w-full lg:w-1/5">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

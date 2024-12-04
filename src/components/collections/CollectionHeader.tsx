import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import ButtonLink from '@/shared/Button/ButtonLink';

import Breadcrumbs from '../Breadcrumbs';

const CollectionHeader: FC<{
  title: string;
  bannerImg: string | StaticImageData;
}> = ({ title, bannerImg }) => {
  const breadcrumbItems = [
    {
      title: (
        <ButtonLink href="/" className="dark:text-neutral-700">
          Головна
        </ButtonLink>
      ),
    },
    {
      title: (
        <span className="text-neutral-500 dark:text-neutral-700">{title}</span>
      ),
    },
  ];

  return (
    <div className="container pb-9">
      <div className="relative overflow-hidden rounded-md p-6 lg:px-20 lg:py-10">
        <div className="">
          <Breadcrumbs Items={breadcrumbItems} />
          <h1 className="mb-4 text-4xl font-semibold dark:text-neutral-900">
            {title}
          </h1>
        </div>
        <div className="absolute left-0 top-0 -z-10 size-full">
          <Image
            src={bannerImg}
            alt="banner image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;

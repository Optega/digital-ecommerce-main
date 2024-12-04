import Image from 'next/image';
import React from 'react';

import image2 from '@/images/Image.webp';
import image1 from '@/images/Image_1_e77e3f11-5a28-455e-9b37-84337c5bef45.webp';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

const StylesSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <div className="">
          <div className="grid grid-cols-12 gap-2">
            <div className="lx:px-14 lx:py-16 group relative col-span-12 overflow-hidden rounded-lg p-8 lg:col-span-8">
              <div className="absolute left-0 top-0 -z-10 size-full">
                <Image
                  src={image1}
                  fill
                  alt="bg-graphic"
                  className="scale-105 object-cover transition-transform duration-700 group-hover:scale-100 dark:opacity-50 "
                />
              </div>
              <div className="flex h-full flex-col justify-center">
                <h2 className="mb-2 text-xl font-bold lg:w-[70%] lg:text-3xl">
                  Зламай ліміти з нашими геймпадами
                </h2>
                <p className="mb-4 text-sm lg:w-1/2">
                  Створений для зручності та точності, наш контролер дозволяє з
                  легкістю грати в улюблені ігри на телефоні.
                </p>
                <div className="mt-10 flex items-center gap-10">
                  <div>
                    <ButtonPrimary showPointer href="/collections/gaming">
                      Переглянути
                    </ButtonPrimary>
                  </div>
                  <p>
                    <span>Від </span>
                    <span className="font-semibold text-primary">₴245</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative col-span-12 h-full overflow-hidden rounded-lg p-8 lg:col-span-4">
              <div className="absolute left-0 top-0 -z-10 size-full">
                <Image
                  src={image2}
                  fill
                  alt="bg-graphic"
                  className="scale-105 object-cover object-center transition-transform duration-700 group-hover:scale-100"
                />
                <div className="absolute left-0 top-0 size-full bg-black/50" />
              </div>
              <div className="flex h-full flex-col justify-center text-white lg:items-center">
                <h3 className="text-center text-2xl font-bold">
                  Миттєво змінюйте стилі
                </h3>
                <p className="mt-2 lg:text-center">
                  Змінюйте свій стиль у дорозі з нашими розумними годинниками -
                  змінюйте свій зовнішній вигляд за лічені секунди за допомогою
                  настроюваних циферблатів годинників і брендів, ідеальних для
                  будь-якого випадку
                </p>
                <ButtonPrimary
                  showPointer
                  className="mt-6"
                  href="/collections/smart-watches"
                >
                  Переглянути
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylesSection;

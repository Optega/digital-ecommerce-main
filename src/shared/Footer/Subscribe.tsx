import React from 'react';

import ButtonPrimary from '../Button/ButtonPrimary';
import Input from '../Input/Input';

const Subscribe = () => {
  return (
    <div className="mt-6 flex flex-col justify-between gap-3 space-y-2 rounded-2xl bg-white/10 dark:bg-neutral-900 md:space-y-0 lg:mt-0">
      <h3 className=" font-semibold">Підпишіться на наші новини</h3>
      <div className="basis-[52%] ">
        <Input
          type="text"
          name="email"
          autoComplete="email"
          sizeClass="h-12 px-0 py-3"
          rounded="rounded-none"
          className="border-2 border-neutral-400 bg-transparent px-2 placeholder:text-sm placeholder:text-neutral-200 focus:border-transparent dark:border-white/15"
          placeholder="email@email.com"
        />
      </div>
      <div className="basis-[43%]">
        <ButtonPrimary className="w-full">Підписатися</ButtonPrimary>
      </div>
    </div>
  );
};

export default Subscribe;

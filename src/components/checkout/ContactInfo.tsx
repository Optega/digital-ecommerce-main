import React from 'react';

import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';

const ContactInfo = () => {
  return (
    <div className="z-0 ">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Контактні дані</h3>
          {/* <span>
            <Link
              href="/account/login"
              className="text-sm text-primary underline"
            >
              Увійти
            </Link>
          </span> */}
        </div>
        <div className="grid grid-cols-1">
          <div>
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                placeholder="ПІБ"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                type="text"
              />
            </FormItem>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                placeholder="Телефон"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                type="tel"
              />
            </FormItem>
          </div>
        </div>
        {/* <div className="">
          <Checkbox
            className="!text-sm"
            name="uudai"
            label="Отримувати сповіщення про акції та знижки"
            defaultChecked
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;

import type { FC, SelectHTMLAttributes } from 'react';
import React from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  sizeClass?: string;
}

const Select: FC<SelectProps> = ({
  className = '',
  sizeClass = 'h-11',
  children,
  ...args
}) => {
  return (
    <select
      className={`nc-Select ${sizeClass} ${className} focus:ring/50 block w-full rounded border bg-gray text-sm focus:border-transparent focus:ring focus:ring-transparent`}
      {...args}
    >
      {children}
    </select>
  );
};

export default Select;

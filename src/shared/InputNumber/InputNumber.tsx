'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

export interface InputNumberProps {
  className?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  desc?: string;
}

const InputNumber: FC<InputNumberProps> = ({
  className = 'w-fit',
  defaultValue = 1,
  min = 0,
  max = 999,
  onChange,
  label,
  desc,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleClickDecrement = () => {
    if (min >= value) return;
    setValue((state) => {
      return state - 1;
    });
    onChange && onChange(value - 1);
  };
  const handleClickIncrement = () => {
    if (max && max <= value) return;
    setValue((state) => {
      return state + 1;
    });
    onChange && onChange(value + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;

    if (value === '') {
      setValue(min);
      onChange?.(min);
    }

    let newValue = Number(value);

    if (newValue < min) {
      setValue(min);
      onChange?.(min);
      return;
    }

    if (max && newValue > max) {
      setValue(max);
      onChange?.(max);
      return;
    }

    setValue(newValue);
    onChange?.(newValue);
  };

  const renderLabel = () => {
    return (
      <div className="flex flex-col">
        <span className="font-medium">{label}</span>
        {desc && (
          <span className="text-xs font-normal text-neutral-500">{desc}</span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`nc-InputNumber border-2 rounded-md border-primary/15 dark:border-neutral-500 flex items-center justify-between space-x-5 ${className}`}
    >
      {label && renderLabel()}

      <div className="nc-NcInputNumber__content text-primary dark:text-neutral-100 flex w-[104px] items-center justify-between">
        <button
          className="flex h-8 w-8 items-center justify-center text-xl focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:border-neutral-400"
          type="button"
          onClick={handleClickDecrement}
          disabled={min >= value}
        >
          -
        </button>
        <input
          type="text"
          value={value}
          className="w-10 p-0 m-0 text-center leading-none appearance-none bg-transparent border-none focus:outline-none text-primary dark:text-neutral-100 cursor-default"
          onChange={handleInputChange}
        />
        <button
          className="flex h-8 w-8 items-center justify-center text-xl focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:border-neutral-400"
          type="button"
          onClick={handleClickIncrement}
          disabled={max ? max <= value : false}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InputNumber;

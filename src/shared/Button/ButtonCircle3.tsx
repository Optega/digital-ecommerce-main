import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

export interface ButtonCircleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
}

const ButtonCircle3: React.FC<ButtonCircleProps> = ({
  className = '',
  size = ' ',
  ...args
}) => {
  return (
    <button
      type="button"
      className={`ttnc-ButtonCircle disabled:bg/70 flex items-center justify-center rounded-full !leading-none focus:ring-transparent ${className} ${size} `}
      {...args}
    />
  );
};

export default ButtonCircle3;

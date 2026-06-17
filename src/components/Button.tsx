import { FC } from 'react';

interface IButton {
  onClick: () => void;
  text?: string;
  variant?: 'primary' | 'secondary' | 'link';
}

const variantStyles = {
  primary: `w-full bg-transparent text-[color:var(--color-green)] border border-[color:var(--color-green)]
             rounded-xl py-3 px-6 text-base font-medium cursor-pointer transition-all duration-300 block
             hover:bg-[color:var(--color-green)] hover:text-[color:var(--color-white)] focus:outline-none
             focus:ring-2 focus:ring-green-[color:var(--color-green)]`,
  secondary: `w-full bg-transparent text-[color:var(--color-green)] border border-[color:var(--color-green)]
             rounded-xl py-3 px-6 text-base font-medium cursor-pointer transition-all duration-300 block
             hover:bg-[color:var(--color-green)] hover:text-[color:var(--color-white)] focus:outline-none
             focus:ring-2 focus:ring-green-[color:var(--color-green)]`,
  link: `w-full bg-transparent text-[color:var(--color-green)] text-base font-medium cursor-pointer
           hover:text-[color:var(--color-teal)]`,
};

const Button: FC<IButton> = ({ onClick, text, variant }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variantStyles[variant ? variant : 'primary']}`}
    >
      {text ? text : 'Default'}
    </button>
  );
};

export default Button;

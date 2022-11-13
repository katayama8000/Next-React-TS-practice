import type { DOMAttributes } from 'react';

type TButtonProps = {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'dark';
  disabled?: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>['onClick'];
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  submit?: boolean;
};

const style = {
  block: `flex justify-center w-full`, //最大幅まで伸ばす
  colors: {
    //色
    blue: `bg-blue-600 focus:ring-2 focus:ring-offset-2 hover:bg-blue-700 focus:ring-blue-500`,
    dark: `bg-black focus:ring-2 focus:ring-offset-2 hover:bg-black-600 focus:ring-gray-500`,
    green: `bg-green-600 focus:ring-2 focus:ring-offset-2 hover:bg-green-700 focus:ring-green-500`,
    indigo: `bg-indigo-600 focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 focus:ring-indigo-600`,
    red: `bg-red-600 focus:ring-2 focus:ring-offset-2 hover:bg-red-700 focus:ring-red-500`,
    yellow: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 hover:bg-yellow-600 focus:ring-yellow-500 `,
  },
  default: `text-white focus:outline-none font-medium py-2 px-4`, //デフォルト
  rounded: `rounded-full`, //角を丸くする
  sizes: {
    lg: 'text-lg',
    md: '',
    //サイズ
    sm: 'text-sm',
  },
};

export const TButton = ({
  block = false,
  children,
  className,
  color,
  disabled = false,
  onClick,
  rounded,
  size = 'md',
  submit,
}: TButtonProps) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${block ? style.block : ''}
               ${color ? style.colors[color] : style.colors.dark}
               ${style.default} ${rounded ? style.rounded : 'rounded'}
               ${style.sizes[size]} `}
    >
      {children}
    </button>
  );
};

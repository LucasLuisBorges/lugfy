import classNames from 'classnames';
import { CaretLeft } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'top' | 'right' | 'bottom' | 'left';
}

export function ArrowButton({ variant, ...rest }: IProps) {
  return (
    <button
      className={classNames(
        'p-1 bg-black/60 rounded-full',
        variant === 'top' && 'rotate-90',
        variant === 'right' && 'rotate-180',
        variant === 'bottom' && '-rotate-90',
        variant === 'left' && 'rotate-0',
      )}
      {...rest}
    >
      <CaretLeft size={24} className="text-white/60" />
    </button>
  );
}

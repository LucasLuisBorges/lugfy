import { ButtonHTMLAttributes } from 'react';
import { Globe } from 'phosphor-react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function LanguageButton({ label, ...rest }: IProps) {
  return (
    <button className="flex gap-2 px-2 py-1 rounded-full border-[1px] w-fit border-white text-sm items-center hover:scale-105" {...rest}>
      <Globe size={20} /> {label}
    </button>
  );
}

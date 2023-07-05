import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-zinc-900 z-50 h-screen w-screen absolute">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {children}
      </div>
    </div>
  );
}

import { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export function BentoGrid({ className = "", children }: BentoGridProps) {
  return (
    <div
      className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function BentoGridItem({
  className = "",
  children,
  onClick,
}: BentoGridItemProps) {
  return (
    <div
      onClick={onClick}
      className={`row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-500 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 cursor-pointer overflow-hidden relative ${className}`}
    >
      {children}
    </div>
  );
}

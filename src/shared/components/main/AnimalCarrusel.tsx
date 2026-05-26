import type { ReactNode } from "react";

interface AnimalCarruselProps {
  title: string;
  viewAllHref: string;
  children: ReactNode;
}

export default function AnimalCarrusel({
  title,
  viewAllHref,
  children,
}: AnimalCarruselProps) {
  return (
    <section className="space-y-stack-md">
      <div className="flex justify-between items-end">
        <h3 className="font-headline-md text-headline-md text-primary">
          {title}
        </h3>
        <a
          className="font-label-md text-secondary hover:underline"
          href={viewAllHref}
        >
          Ver todos
        </a>
      </div>
      <div className="flex gap-gutter-mobile overflow-x-auto no-scrollbar pb-8 -mx-margin-mobile px-margin-mobile snap-x">
        {children}
      </div>
    </section>
  );
}

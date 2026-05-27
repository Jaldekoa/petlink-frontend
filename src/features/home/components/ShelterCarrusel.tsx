import type { Shelter } from "@/shared/types/selther.type";
import ShelterCard from "./ShelterCard";

interface ShelterCarruselProps {
  title: string;
  shelters: Shelter[];
  loading?: boolean;
}

export default function ShelterCarrusel({
  title,
  shelters,
  loading = false,
}: ShelterCarruselProps) {
  return (
    <section className="space-y-stack-md">
      <div className="flex justify-between items-end">
        <h3 className="font-headline-md text-headline-md text-primary">
          {title}
        </h3>
      </div>
      <div className="flex gap-gutter-mobile overflow-x-auto no-scrollbar pb-8 -mx-margin-mobile px-margin-mobile snap-x">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-[260px] flex-shrink-0 snap-start">
              <div className="h-[320px] rounded-3xl bg-surface-container animate-pulse" />
            </div>
          ))
        ) : shelters.length === 0 ? (
          <p className="text-on-surface-variant font-body-md py-8 px-2">
            No hay refugios disponibles en este momento.
          </p>
        ) : (
          shelters.map((shelter) => (
            <div key={shelter.id} className="w-[260px] flex-shrink-0">
              <ShelterCard shelter={shelter} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

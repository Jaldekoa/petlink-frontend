import { useNavigate, Link } from "react-router";
import type { Animal } from "@/shared/types/animal.types";
import AnimalCard from "./AnimalCard";

interface AnimalCarruselProps {
  title: string;
  viewAllHref?: string;
  animals: Animal[];
  loading?: boolean;
}

function getAge(birthDate: string | null): string {
  if (!birthDate) return "Edad desconocida";
  const birth = new Date(birthDate);
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth());
  if (totalMonths < 2) return "Cachorro";
  if (totalMonths < 12) return `${totalMonths} meses`;
  const years = Math.floor(totalMonths / 12);
  return years === 1 ? "1 año" : `${years} años`;
}

function getMainImage(animal: Animal): string {
  const main = animal.images?.find((img) => img.isMain);
  return main?.imageUrl ?? animal.images?.[0]?.imageUrl ?? "";
}

export default function AnimalCarrusel({
  title,
  viewAllHref = "/animals",
  animals,
  loading = false,
}: AnimalCarruselProps) {
  const navigate = useNavigate();

  return (
    <section className="space-y-stack-md">
      <div className="flex justify-between items-end">
        <h3 className="font-headline-md text-headline-md text-primary">
          {title}
        </h3>
        <Link
          className="font-label-md text-secondary hover:underline"
          to={viewAllHref}
        >
          Ver todos
        </Link>
      </div>
      <div className="flex gap-gutter-mobile overflow-x-auto no-scrollbar pb-8 -mx-margin-mobile px-margin-mobile snap-x">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-[260px] flex-shrink-0 snap-start">
              <div className="h-[360px] rounded-3xl bg-surface-container animate-pulse" />
            </div>
          ))
        ) : animals.length === 0 ? (
          <p className="text-on-surface-variant font-body-md py-8 px-2">
            No hay animales disponibles en este momento.
          </p>
        ) : (
          animals.map((animal) => (
            <div key={animal.id} className="w-[260px] flex-shrink-0">
              <AnimalCard
                img={getMainImage(animal)}
                name={animal.name}
                location={
                  animal.shelter?.city
                    ? `${animal.shelter.name}, ${animal.shelter.city}`
                    : (animal.shelter?.name ?? "")
                }
                featureOne={getAge(animal.birthDate)}
                featureTwo={animal.breed ?? animal.species}
                badge={animal.status === "reserved" ? "Reservado" : undefined}
                badgeColor="orange"
                onOpen={() => navigate(`/animals/${animal.id}`)}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

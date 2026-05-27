import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAnimalById } from "@/services/animal.service";
import { getMyLikes, toggleLike } from "@/services/like.service";
import type { Animal, AnimalImage } from "@/shared/types/animal.types";

export default function AnimalProfile() {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favoriteError, setFavoriteError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadAnimal = async () => {
      if (!animalId) {
        setError("Animal no encontrado");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      setFavoriteError("");

      try {
        const [animalData, likes] = await Promise.all([
          getAnimalById(animalId),
          getMyLikes(),
        ]);

        if (ignore) return;

        setAnimal(animalData);
        setIsFavorite(
          likes.some((like) => String(like.animal.id) === String(animalData.id)),
        );
      } catch (err) {
        if (ignore) return;

        setError(
          err instanceof Error ? err.message : "No se pudo cargar el animal",
        );
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadAnimal();

    return () => {
      ignore = true;
    };
  }, [animalId]);

  const handleFavoriteToggle = async () => {
    if (!animalId) return;

    setFavoriteError("");

    try {
      const result = await toggleLike(animalId);
      setIsFavorite(result.liked);
    } catch (err) {
      setFavoriteError(
        err instanceof Error
          ? err.message
          : "No se pudo actualizar el favorito",
      );
    }
  };

  if (loading) {
    return <StatusMessage icon="progress_activity" title="Cargando animal..." />;
  }

  if (error || !animal) {
    return (
      <StatusMessage
        icon="error"
        title="Animal no encontrado"
        subtitle={error || "No hemos podido encontrar este animal."}
      />
    );
  }

  const image = getAnimalImage(animal.images);
  const age = getAnimalAge(animal.birthDate);
  const location = getAnimalLocation(animal);
  const breed = animal.breed ?? animal.species;
  const sex = getAnimalSex(animal.sex);
  const weight = animal.weight ? `${animal.weight} kg` : "No indicado";
  const energy = animal.energyLevel ?? "No indicada";
  const health = getHealthLabel(animal);

  return (
    <main className="mt-20 pb-24 max-w-4xl mx-auto">
      <section className="px-margin-mobile pt-4 pb-6 flex items-center justify-between">
        <button
          className="flex items-center gap-2 text-primary hover:bg-surface-container-high rounded-full px-3 py-2 transition-colors active:scale-95"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_back
          </span>
          <span className="font-label-md text-label-md">Volver</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high rounded-full p-2 transition-colors active:scale-90"
            onClick={handleFavoriteToggle}
            aria-label={
              isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"
            }
            style={{
              color: isFavorite ? "var(--color-warm-orange)" : undefined,
              fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            favorite
          </button>
          <button
            className="material-symbols-outlined text-primary hover:bg-surface-container-high rounded-full p-2 transition-colors active:scale-90"
            aria-label="Compartir animal"
          >
            share
          </button>
        </div>
      </section>

      {favoriteError && (
        <div className="mx-margin-mobile mb-4 rounded-2xl border border-error/20 bg-error/10 px-4 py-3 text-error font-body-sm text-body-sm">
          {favoriteError}
        </div>
      )}

      <section className="relative px-margin-mobile pt-12 overflow-visible">
        <div className="relative bg-secondary-container rounded-3xl h-80 w-full flex items-end justify-center overflow-hidden">
          <img
            className="z-10 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            alt={`Foto de ${animal.name}`}
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      <div className="px-margin-mobile mt-base">
        <header className="mb-stack-md flex justify-between items-start gap-4">
          <div>
            <h2 className="font-headline-xl text-primary text-headline-xl">
              {animal.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-on-surface-variant mt-1">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              <span className="font-label-md text-label-md">{location}</span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-md text-label-md">{age}</span>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-outline-variant px-4 py-2 rounded-full shadow-sm">
            <span className="font-label-sm text-label-sm text-secondary">
              {breed}
            </span>
          </div>
        </header>

        <div className="flex flex-wrap gap-stack-sm mb-stack-lg">
          <InfoChip icon="pets" label={animal.species} />
          <InfoChip icon="sentiment_very_satisfied" label={energy} />
          <InfoChip icon="vaccines" label={animal.vaccinated ? "Vacunado" : "Vacunas no indicadas"} />
          <InfoChip icon="check_circle" label={animal.sterilized ? "Esterilizado" : "Esterilización no indicada"} />
        </div>

        <section className="mb-stack-lg">
          <h3 className="font-headline-md text-headline-md text-primary mb-base">
            Sobre {animal.name}
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {animal.description ?? "Este animal aún no tiene descripción."}
          </p>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-stack-lg">
          <DetailCard icon="scale" label="Peso" value={weight} />
          <DetailCard icon="bolt" label="Energía" value={energy} />
          <DetailCard
            icon={animal.sex === "female" ? "female" : "male"}
            label="Género"
            value={sex}
          />
          <DetailCard icon="health_and_safety" label="Salud" value={health} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-stack-lg">
          <DetailCard
            icon="child_care"
            label="Con niños"
            value={animal.goodWithKids ? "Sí" : "No indicado"}
          />
          <DetailCard
            icon="sound_detection_dog_barking"
            label="Con animales"
            value={animal.goodWithAnimals ? "Sí" : "No indicado"}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-stack-lg">
          <button className="flex-1 bg-on-tertiary-container hover:bg-tertiary-container text-white py-4 px-8 rounded-full font-headline-md flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-on-tertiary-container/20">
            <span className="material-symbols-outlined">favorite</span>
            Adoptar a {animal.name}
          </button>
          <button className="flex-1 bg-white border-2 border-secondary text-secondary py-4 px-8 rounded-full font-headline-md flex items-center justify-center gap-3 transition-all hover:bg-secondary-container/20 active:scale-95">
            <span className="material-symbols-outlined">
              volunteer_activism
            </span>
            Apadrinar
          </button>
        </div>
      </div>
    </main>
  );
}

function getAnimalImage(images: Pick<AnimalImage, "imageUrl" | "isMain">[]) {
  return (
    images.find((image) => image.isMain)?.imageUrl ??
    images[0]?.imageUrl ??
    "/refe.webp"
  );
}

function getAnimalLocation(animal: Animal) {
  return animal.shelter.city ?? animal.shelter.name ?? "Ubicación no disponible";
}

function getAnimalAge(birthDate?: string | null) {
  if (!birthDate) return "Edad no disponible";

  const birth = new Date(birthDate);
  if (Number.isNaN(birth.getTime())) return "Edad no disponible";

  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  const hasHadBirthday =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());

  if (!hasHadBirthday) years -= 1;

  if (years <= 0) return "Menos de 1 año";
  return `${years} ${years === 1 ? "año" : "años"}`;
}

function getAnimalSex(sex?: Animal["sex"]) {
  if (sex === "male") return "Macho";
  if (sex === "female") return "Hembra";
  return "No indicado";
}

function getHealthLabel(animal: Animal) {
  if (animal.vaccinated && animal.sterilized) return "Vacunado y esterilizado";
  if (animal.vaccinated) return "Vacunado";
  if (animal.sterilized) return "Esterilizado";
  return "No indicada";
}

function InfoChip({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-secondary-container/50 px-4 py-2 rounded-full text-on-secondary-fixed-variant">
      <span className="material-symbols-outlined text-lg">{icon}</span>
      <span className="font-label-md text-label-md">{label}</span>
    </div>
  );
}

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface-container-low p-4 rounded-3xl flex flex-col items-center text-center">
      <span className="material-symbols-outlined text-secondary mb-2">
        {icon}
      </span>
      <span className="font-label-sm text-label-sm text-outline">{label}</span>
      <span className="font-headline-md text-headline-md text-primary">
        {value}
      </span>
    </div>
  );
}

function StatusMessage({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <main className="mt-20 px-margin-mobile pb-24 max-w-4xl mx-auto">
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-xl mx-auto">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <span
            className="material-symbols-outlined text-[40px] text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            {subtitle}
          </p>
        )}
      </section>
    </main>
  );
}

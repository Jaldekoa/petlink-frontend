export interface AnimalCardProps {
  img: string;
  name: string;
  location: string;
  pill?: string;
  featureOne?: string;
  featureTwo?: string;
  isFavorite?: boolean;
}

export default function AnimalCard({ animalData }: { animalData: AnimalCardProps }) {

  const { img, name, location, pill, featureOne, featureTwo, isFavorite = false } = animalData

  return (
    <div className="pop-out-container relative mt-16">
      <div
        className="bg-secondary-container rounded-4xl p-6 pt-16 flex flex-col justify-end h-64 relative overflow-visible">

        <img alt="Dog popping out"
          className="rounded-4xl absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 object-contain pointer-events-none"
          data-alt="A friendly brown dachshund dog with large expressive eyes leaning over the edge of its container, appearing to pop out of the screen. The dog is photorealistic with soft brown fur, set against a bright, airy background. The overall style is playful and modern with high-key lighting that emphasizes the pet's warmth and friendly personality."
          src={img} />

        <div className="mt-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-headline-md text-primary">{name}</h4>
              <p className="font-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> {location}
              </p>
            </div>
            <div className="bg-on-tertiary-container text-white px-3 py-1 rounded-full text-label-sm">
              {pill}
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <span
              className="bg-surface/50 px-3 py-1 rounded-full text-label-sm text-secondary">{featureOne}</span>
            <span className="bg-surface/50 px-3 py-1 rounded-full text-label-sm text-secondary">{featureTwo}</span>
          </div>
        </div>

        <button
          className="absolute bottom-6 right-6 bg-tertiary-container text-on-tertiary-container w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-transform">
          <span className="material-symbols-outlined">favorite</span>{isFavorite}
        </button>

      </div>
    </div>
  );
}
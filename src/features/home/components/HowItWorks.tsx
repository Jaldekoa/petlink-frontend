const steps = [
  {
    number: "01",
    icon: "search",
    title: "Explora los animales",
    description:
      "Descubre perros, gatos y más animales que esperan un hogar en refugios de tu zona.",
  },
  {
    number: "02",
    icon: "chat_bubble",
    title: "Contacta con el refugio",
    description:
      "Envía una solicitud de adopción y habla directamente con el equipo del refugio.",
  },
  {
    number: "03",
    icon: "favorite",
    title: "Dale un hogar",
    description:
      "Completa el proceso de adopción y llévate a tu nuevo compañero de vida a casa.",
  },
];

export default function HowItWorks() {
  return (
    <section className="space-y-stack-md">
      <div className="text-center space-y-2">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Cómo funciona
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-sm mx-auto">
          Adoptar es más fácil de lo que crees. Solo tres pasos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-headline-xl text-headline-xl text-outline-variant leading-none select-none">
                {step.number}
              </span>
              <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  {step.icon}
                </span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              {step.title}
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: "dashboard",
    title: "Gestión centralizada",
    description:
      "Añade y edita todos tus animales, gestiona solicitudes de adopción y controla tu perfil desde un único panel.",
  },
  {
    icon: "visibility",
    title: "Visibilidad online",
    description:
      "Tu refugio y tus animales llegan a miles de personas que buscan activamente adoptar un compañero.",
  },
  {
    icon: "handshake",
    title: "Herramientas de adopción",
    description:
      "Recibe solicitudes, chatea con los interesados y gestiona todo el proceso de adopción en la plataforma.",
  },
];

export default function ShelterSection() {
  return (
    <section className="rounded-3xl bg-primary-container px-6 py-10 md:px-12 space-y-stack-lg">
      <div className="text-center space-y-2 max-w-lg mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-white">
          ¿Eres una protectora?
        </h2>
        <p className="font-body-md text-on-primary-container">
          Petlink no es solo para adoptantes. Si gestionas un refugio, te damos
          las herramientas para digitalizarte y llegar a más familias.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl bg-white/10 border border-white/10 p-5 space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-warm-orange flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[20px]">
                {b.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-white">{b.title}</h3>
            <p className="font-body-sm text-on-primary-container">{b.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-3.5 rounded-full font-label-md text-white bg-warm-orange shadow-md active:scale-95 transition-transform">
          Registra tu refugio
        </button>
      </div>
    </section>
  );
}

import { Link } from "react-router";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-primary-container min-h-[420px] md:min-h-[480px] flex flex-col">
      {/* Mobile image — top strip that fades into the dark background */}
      <div className="md:hidden relative h-52 flex-shrink-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Persona abrazando a su perro"
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-container/40 to-primary-container" />
      </div>

      {/* Desktop image — right half, blends into the dark background on the left */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Persona abrazando a su perro"
          className="h-full w-full object-cover"
        />
        {/* Gradient blending left edge into bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/50 to-transparent" />
        {/* Subtle dark vignette on top/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/30 via-transparent to-primary-container/30" />
      </div>

      {/* Dot pattern — only over the dark left side */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none md:w-1/2"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end flex-1 p-8 md:p-12 md:w-1/2 space-y-stack-md">
        <div className="space-y-3">
          <h1 className="font-headline-xl text-headline-xl text-white leading-tight">
            Encuentra a tu <br />
            <span className="text-warm-orange">compañero de vida</span>
          </h1>
          <p className="font-body-lg text-on-primary-container max-w-sm">
            Adopta a un animal de un refugio real. También ayudamos a
            protectoras a gestionar sus animales y llegar a más personas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/animals"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-label-md text-white bg-warm-orange shadow-md active:scale-95 transition-transform"
          >
            Explorar animales
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-label-md text-white border border-white/30 hover:bg-white/10 active:scale-95 transition-all"
          >
            Soy una protectora
          </Link>
        </div>
      </div>
    </section>
  );
}

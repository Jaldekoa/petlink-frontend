interface StatsProps {
  animalTotal: number;
  shelterTotal: number;
}

export default function Stats({ animalTotal, shelterTotal }: StatsProps) {
  const items = [
    {
      icon: "pets",
      value: animalTotal > 0 ? `${animalTotal}+` : "—",
      label: "animales en adopción",
    },
    {
      icon: "store",
      value: shelterTotal > 0 ? `${shelterTotal}+` : "—",
      label: "refugios asociados",
    },
    { icon: "volunteer_activism", value: "1.200+", label: "adopciones realizadas" },
    { icon: "favorite", value: "980+", label: "familias felices" },
  ];

  return (
    <div className="rounded-3xl bg-secondary-container px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary text-[22px]">
                {item.icon}
              </span>
            </div>
            <p className="font-headline-md text-headline-md text-on-secondary-container">
              {item.value}
            </p>
            <p className="font-body-sm text-on-secondary-container opacity-80 leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

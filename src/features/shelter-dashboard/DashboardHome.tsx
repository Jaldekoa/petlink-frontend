export default function DashboardHome() {
  const stats = [
    { label: "Protectoras", value: "24", icon: "home_work", color: "bg-[#bbebc5]" },
    { label: "Animales", value: "156", icon: "pets", color: "bg-[#b8efd0]" },
    { label: "Usuarios", value: "1.2k", icon: "people", color: "bg-[#ffdbce]" },
    { label: "Adopciones", value: "89", icon: "favorite", color: "bg-[#ffdad6]" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
          Panel de Control
        </h2>
        <p className="text-[#404943] mt-1">
          Gestión global de la plataforma de adopción.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-5 rounded-xl shadow-sm border border-[#c0c9c1]/30 hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 ${stat.color} rounded-full flex items-center justify-center mb-3`}>
              <span className="material-symbols-outlined text-[20px]">
                {stat.icon}
              </span>
            </div>
            <p className="text-xs text-[#404943] uppercase tracking-wider font-semibold">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#c0c9c1]/30 overflow-hidden">
        <div className="p-5 border-b border-[#c0c9c1]/30">
          <h3 className="text-lg font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
            Últimas Adopciones
          </h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-[#f2f4f2]">
            <tr>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Animal</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Adoptante</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Estado</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c0c9c1]/20">
            {[
              { animal: "Luna", person: "Carlos Ruiz", status: "Aprobada", date: "Hoy, 10:45" },
              { animal: "Milo", person: "Ana Martínez", status: "Pendiente", date: "Ayer, 16:20" },
              { animal: "Bruno", person: "Jorge Silva", status: "Aprobada", date: "Ayer, 11:30" },
            ].map((row) => (
              <tr key={row.animal} className="hover:bg-[#f2f4f2]/50">
                <td className="px-5 py-4 font-semibold text-[#002819]">{row.animal}</td>
                <td className="px-5 py-4 text-sm text-[#404943]">{row.person}</td>
                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      row.status === "Aprobada"
                        ? "bg-[#bbebc5] text-[#416c4d]"
                        : "bg-[#e1e3e1] text-[#404943]"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-[#404943]">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mockRequests = [
  { id: "#AD-4592", animal: "Bruno", user: "Carlos Mendoza", date: "12 Oct, 2023", status: "Pendiente" },
  { id: "#AD-4588", animal: "Luna", user: "María Elena Pérez", date: "10 Oct, 2023", status: "Aprobada" },
  { id: "#AD-4581", animal: "Coco", user: "Ricardo Ruiz", date: "08 Oct, 2023", status: "Rechazada" },
];

const statusColors: Record<string, string> = {
  "Pendiente": "bg-[#ffdbce] text-[#7f2b00]",
  "Aprobada": "bg-[#bbebc5] text-[#416c4d]",
  "Rechazada": "bg-[#ffdad6] text-[#93000a]",
};

export default function RequestsManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">Solicitudes de Adopción</h2>
        <p className="text-[#404943] mt-1">Revisa y gestiona las solicitudes de los usuarios.</p>
      </div>

      <div className="bg-white rounded-xl border border-[#c0c9c1]/30 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#f2f4f2]">
            <tr>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">ID</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Animal</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Usuario</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Fecha</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Estado</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c0c9c1]/20">
            {mockRequests.map((req) => (
              <tr key={req.id} className="hover:bg-[#f2f4f2]/50">
                <td className="px-5 py-4 text-sm font-bold text-[#404943]">{req.id}</td>
                <td className="px-5 py-4 font-semibold text-[#002819]">{req.animal}</td>
                <td className="px-5 py-4 text-sm text-[#404943]">{req.user}</td>
                <td className="px-5 py-4 text-sm text-[#404943]">{req.date}</td>
                <td className="px-5 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[req.status]}`}>{req.status}</span>
                </td>
                <td className="px-5 py-4">
                  <button className="px-4 py-1.5 bg-[#3c6749] text-white rounded-full text-sm font-semibold hover:bg-[#002819] transition-all">Ver Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
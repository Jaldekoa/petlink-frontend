export default function SponsorshipsManagement() {
  const mockData = [
    { id: 1, user: "Ana López", animal: "Oliver", amount: "25€/mes", since: "Ene 2024" },
    { id: 2, user: "Pedro García", animal: "Luna", amount: "15€/mes", since: "Mar 2024" },
    { id: 3, user: "María Ruiz", animal: "Bruno", amount: "30€/mes", since: "Feb 2024" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">Apadrinamientos</h2>
        <p className="text-[#404943] mt-1">Gestiona los apadrinamientos activos.</p>
      </div>

      <div className="bg-white rounded-xl border border-[#c0c9c1]/30 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#f2f4f2]">
            <tr>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Padrino</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Animal</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Cantidad</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Desde</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c0c9c1]/20">
            {mockData.map((item) => (
              <tr key={item.id} className="hover:bg-[#f2f4f2]/50">
                <td className="px-5 py-4 font-semibold text-[#002819]">{item.user}</td>
                <td className="px-5 py-4 text-sm text-[#404943]">{item.animal}</td>
                <td className="px-5 py-4"><span className="px-3 py-1 bg-[#bbebc5] text-[#416c4d] rounded-full text-xs font-bold">{item.amount}</span></td>
                <td className="px-5 py-4 text-sm text-[#404943]">{item.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
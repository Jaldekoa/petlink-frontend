import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Administrador" | "Usuario" | "Trabajador";
}

const mockUsers: User[] = [
  { id: 1, name: "Ana Martínez", email: "ana.martinez@email.com", role: "Administrador" },
  { id: 2, name: "Juan Pablo Díaz", email: "jp.diaz88@email.com", role: "Usuario" },
  { id: 3, name: "Lucía García", email: "lucia.garcia@email.com", role: "Trabajador" },
  { id: 4, name: "Carlos Ruiz", email: "carlos.ruiz@email.com", role: "Usuario" },
];

const roleColors: Record<string, string> = {
  "Admin": "bg-[#06402b] text-white",
  "Usuario": "bg-[#e1e3e1] text-[#404943]",
  "Trabajador": "bg-[#ffdbce] text-[#7f2b00]",
};

export default function UsersManagement() {
  const [users] = useState<User[]>(mockUsers);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">Gestión de Usuarios</h2>
          <p className="text-[#404943] mt-1">Control de accesos y roles de la plataforma.</p>
        </div>
        <button className="bg-[#002819] text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:brightness-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          Nuevo Usuario
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#c0c9c1]/30 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#f2f4f2]">
            <tr>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Nombre</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Email</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Rol</th>
              <th className="px-5 py-3 text-xs text-[#404943] uppercase font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c0c9c1]/20">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#f2f4f2]/50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#3c6749] text-white flex items-center justify-center text-xs font-bold">
                      {user.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="font-semibold text-[#002819]">{user.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-[#404943]">{user.email}</td>
                <td className="px-5 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${roleColors[user.role]}`}>{user.role}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-1">
                    <button className="p-2 text-[#404943] hover:text-[#002819] hover:bg-[#e6e9e7] rounded-full"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                    <button className="p-2 text-[#404943] hover:text-[#ba1a1a] hover:bg-[#ffdad6] rounded-full"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
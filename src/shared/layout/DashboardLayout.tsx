import { useState } from "react";
import { Outlet, NavLink } from "react-router";

const menuItems = [
  { path: "/dashboard", icon: "dashboard", label: "Panel" },
  { path: "/dashboard/shelters", icon: "home_work", label: "Protectoras" },
  { path: "/dashboard/animals", icon: "pets", label: "Animales" },
  { path: "/dashboard/users", icon: "people", label: "Usuarios" },
  { path: "/dashboard/requests", icon: "description", label: "Solicitudes" },
  { path: "/dashboard/sponsorships", icon: "volunteer_activism", label: "Apadrinamientos" },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8faf8]">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-[#002819] text-white flex flex-col
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-white/10 shrink-0">
          <h1 className="text-xl font-bold font-['Plus_Jakarta_Sans']">
            PetLink Admin
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${isActive
                  ? "bg-[#bbebc5] text-[#002819] font-semibold"
                  : "text-white/70 hover:bg-white/10"
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 shrink-0 border-t border-white/10">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">
              arrow_back
            </span>
            <span className="text-sm">Volver al inicio</span>
          </NavLink>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-lg font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
            Panel de Administración
          </h2>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#404943] cursor-pointer">
              notifications
            </span>
            <div className="w-8 h-8 rounded-full bg-[#3c6749] text-white flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
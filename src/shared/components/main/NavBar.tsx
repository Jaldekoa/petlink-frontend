import { NavLink } from "react-router";

const NAV_ITEMS = [
  { to: "/",        label: "Inicio",   icon: "home"   },
  { to: "/animals", label: "Mascotas", icon: "pets"   },
  { to: "/search",  label: "Buscar",   icon: "search" },
  { to: "/chat",    label: "Chat",     icon: "chat"   },
  { to: "/profile", label: "Perfil",   icon: "person" },
] as const;

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_-1px_0_0_rgba(0,0,0,0.06)] rounded-t-2xl">
      <div className="flex justify-around items-end w-full px-2 pt-2 pb-3 min-h-[64px]">
        {NAV_ITEMS.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className="flex flex-col items-center gap-0.5 flex-1 group"
          >
            {({ isActive }) => (
              <>
                {/* Pill indicator + icon */}
                <span
                  className={`
                    relative flex items-center justify-center
                    w-16 h-8 rounded-full
                    transition-all duration-200
                    ${isActive
                      ? "bg-secondary-container"
                      : "group-hover:bg-surface-container-high group-active:scale-90"
                    }
                  `}
                >
                  <span
                    className={`
                      material-symbols-outlined text-[22px] transition-colors duration-200
                      ${isActive ? "text-on-secondary-container" : "text-on-surface-variant"}
                    `}
                    style={{
                      fontVariationSettings: isActive ? "'FILL' 1, 'wght' 500" : "'FILL' 0, 'wght' 400",
                    }}
                  >
                    {icon}
                  </span>
                </span>

                {/* Label */}
                <span
                  className={`
                    font-label-sm text-[11px] leading-none transition-colors duration-200
                    ${isActive ? "text-on-surface font-semibold" : "text-on-surface-variant"}
                  `}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

import ColumnNavigation from "./ColumnNavigation";

export default function MenuNavigationGrid() {
  const columnFinal = [
    { title: "Ayuda", icon: "help_center", href: "/" },
    { title: "Configuración", icon: "settings", href: "/" },
    { title: "Cerrar Sesión", icon: "logout", href: "/login" },
  ];

  return (
    <>
      <h3 className="font-headline-md text-headline-md text-primary mb-4 px-1">
        Mi Cuenta
      </h3>
      <div className="grid grid-cols-1 gap-4">
        <ColumnNavigation columnList={columnFinal} />
      </div>
    </>
  );
}

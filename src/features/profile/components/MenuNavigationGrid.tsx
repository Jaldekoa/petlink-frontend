import ColumnNavigation from "./ColumnNavigation";

export default function MenuNavigationGrid() {
    const columnOne = [
        { title: "Mis Adopciones", icon: "volunteer_activism", href: "/" },
        { title: "Mensajes", icon: "chat_bubble", href: "/" },
        { title: "Configuración", icon: "settings", href: "/" }
    ]

    const columnTwo = [
        { title: "Mis Donaciones", icon: "redeem", href: "/" },
        { title: "Ayuda", icon: "help_center", href: "/" },
        { title: "Cerrar Sesión", icon: "logout", href: "/" }
    ]

    return (
        <>
            <h3 className="font-headline-md text-headline-md text-primary mb-4 px-1">Mi Cuenta</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColumnNavigation columnList={columnOne} />
                <ColumnNavigation columnList={columnTwo} />
            </div>
        </>
    );
}
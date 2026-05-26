import { Link } from 'react-router';

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_-4px_20px_0px_rgba(0,0,0,0.05)] rounded-t-xl">
      <div className="flex justify-around items-center w-full px-2 pt-2 pb-safe-bottom min-h-18">

        <Link to="/" className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full w-40 py-1.5 transition-all duration-300">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm">Inicio</span>
        </Link>

        <Link to="/animals" className="flex flex-col items-center justify-center text-on-surface-variant rounded-full w-40 py-1.5 hover:bg-surface-container-high active:scale-95 transition-all">
          <span className="material-symbols-outlined">pets</span>
          <span className="font-label-sm">Mascotas</span>
        </Link>

        <Link to="/search" className="flex flex-col items-center justify-center text-on-surface-variant rounded-full w-40 py-1.5 hover:bg-surface-container-high active:scale-95 transition-all">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-sm">Buscar</span>
        </Link>

        <Link to="/chat" className="flex flex-col items-center justify-center text-on-surface-variant rounded-full w-40 py-1.5 hover:bg-surface-container-high active:scale-95 transition-all">
          <span className="material-symbols-outlined">chat</span>
          <span className="font-label-sm">Chat</span>
        </Link>

        <Link to="/profile" className="flex flex-col items-center justify-center text-on-surface-variant rounded-full w-40 py-1.5 hover:bg-surface-container-high active:scale-95 transition-all">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm">Perfil</span>
        </Link>

      </div>
    </nav>
  );
}



/* export default function NavBar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_-4px_20px_0px_rgba(0,0,0,0.05)] rounded-t-xl">
            <div className="flex justify-around items-center w-full px-2 pt-2 pb-safe-bottom min-h-18">

                <Link to="/"
                    className="cursor-pointer flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-5 py-1.5 transition-all duration-300">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-label-sm">Inicio</span>
                </Link>

                <Link to="/search"
                    className="cursor-pointer flex flex-col items-center justify-center text-on-surface-variant px-5 py-1.5 hover:bg-surface-container-high rounded-full active:scale-95 transition-all">
                    <span className="material-symbols-outlined">search</span>
                    <span className="font-label-sm">Buscar</span>
                </Link>

                <Link to="/Linknimals"
                    className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1.5 hover:bg-surface-container-high rounded-full active:scale-95 transition-all">
                    <span className="material-symbols-outlined">pets</span>
                    <span className="font-label-sm">Mis Mascotas</span>
                </Link>

                <Link to="/profile"
                    className="cursor-pointer flex flex-col items-center justify-center text-on-surface-variant px-5 py-1.5 hover:bg-surface-container-high rounded-full active:scale-95 transition-all">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-label-sm">Perfil</span>
                </Link>
            </div>
        </nav>
    )
} */
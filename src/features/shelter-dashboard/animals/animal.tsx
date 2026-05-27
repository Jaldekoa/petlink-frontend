import { useState } from "react";

interface Animal {
  id: number;
  name: string;
  species: string;
  age: number;
  shelter: string;
  status: "Disponible" | "Adoptado" | "En tránsito";
}

const mockAnimals: Animal[] = [
  { id: 1, name: "Oliver", species: "Perro", age: 3, shelter: "Huellas Felices", status: "Disponible" },
  { id: 2, name: "Luna", species: "Gato", age: 2, shelter: "Santuario Felino", status: "Adoptado" },
  { id: 3, name: "Bruno", species: "Perro", age: 5, shelter: "Refugio Patitas", status: "En tránsito" },
  { id: 4, name: "Milo", species: "Gato", age: 1, shelter: "Santuario Felino", status: "Disponible" },
];

const statusColors: Record<string, string> = {
  "Disponible": "bg-[#bbebc5] text-[#416c4d]",
  "Adoptado": "bg-[#e1e3e1] text-[#404943]",
  "En tránsito": "bg-[#ffdbce] text-[#7f2b00]",
};

export default function AnimalsManagement() {
  const [animals] = useState<Animal[]>(mockAnimals);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);

  const openCreate = () => { setEditingAnimal(null); setModalOpen(true); };
  const openEdit = (animal: Animal) => { setEditingAnimal(animal); setModalOpen(true); };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">Inventario de Animales</h2>
          <p className="text-[#404943] mt-1">Gestiona los residentes de las protectoras.</p>
        </div>
        <button onClick={openCreate} className="bg-[#421300] text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:brightness-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          Crear Animal
        </button>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#f2f4f2] p-4 rounded-xl">
        <select className="bg-white rounded-lg py-3 px-4 text-sm border-none focus:ring-2 focus:ring-[#3c6749]">
          <option>Todas las protectoras</option>
          <option>Huellas Felices</option>
          <option>Santuario Felino</option>
        </select>
        <select className="bg-white rounded-lg py-3 px-4 text-sm border-none focus:ring-2 focus:ring-[#3c6749]">
          <option>Cualquier tipo</option>
          <option>Perro</option>
          <option>Gato</option>
        </select>
        <select className="bg-white rounded-lg py-3 px-4 text-sm border-none focus:ring-2 focus:ring-[#3c6749]">
          <option>Todos los estados</option>
          <option>Disponible</option>
          <option>Adoptado</option>
          <option>En tránsito</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {animals.map((animal) => (
          <div key={animal.id} className="bg-white rounded-2xl border border-[#c0c9c1]/30 hover:shadow-lg transition-all overflow-hidden">
            <div className="relative h-48 bg-[#eceeec] flex items-center justify-center">
              <span className="material-symbols-outlined text-[64px] text-[#c0c9c1]">pets</span>
              <span className={`absolute top-3 right-3 ${statusColors[animal.status]} text-[10px] font-bold px-2 py-1 rounded-full uppercase`}>
                {animal.status}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">{animal.name}</h3>
              <p className="text-sm text-[#404943] flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-[14px]">category</span>
                {animal.species} · {animal.age} años
              </p>
              <p className="text-sm text-[#404943] flex items-center gap-1 mb-4">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {animal.shelter}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#eceeec]">
                <button className="p-2 text-[#3c6749] hover:bg-[#bbebc5] rounded-full transition-colors">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button onClick={() => openEdit(animal)} className="p-2 text-[#404943] hover:bg-[#e6e9e7] rounded-full transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="p-2 text-[#ba1a1a] hover:bg-[#ffdad6] rounded-full transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#eceeec] flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#002819]">{editingAnimal ? "Editar Animal" : "Crear Animal"}</h3>
              <button onClick={() => setModalOpen(false)} className="p-2 hover:bg-[#e6e9e7] rounded-full">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#404943]">Nombre</label>
                <input type="text" defaultValue={editingAnimal?.name || ""} className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#404943]">Especie</label>
                  <select defaultValue={editingAnimal?.species || ""} className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1">
                    <option value="">Seleccionar</option>
                    <option>Perro</option>
                    <option>Gato</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#404943]">Edad</label>
                  <input type="number" defaultValue={editingAnimal?.age || ""} className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#404943]">Estado</label>
                <select defaultValue={editingAnimal?.status || ""} className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1">
                  <option>Disponible</option>
                  <option>Adoptado</option>
                  <option>En tránsito</option>
                </select>
              </div>
            </div>
            <div className="px-6 py-4 flex gap-3 bg-[#f2f4f2]">
              <button onClick={() => setModalOpen(false)} className="flex-1 py-3 rounded-full border border-[#717973] text-[#191c1b] font-semibold hover:bg-[#e6e9e7]">Cancelar</button>
              <button className="flex-1 py-3 rounded-full bg-[#421300] text-white font-semibold hover:brightness-110 active:scale-95 transition-all">{editingAnimal ? "Guardar" : "Crear"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
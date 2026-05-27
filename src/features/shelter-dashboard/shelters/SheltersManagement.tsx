import { useState } from "react";

interface Shelter {
  id: number;
  name: string;
  city: string;
  phone: string;
  address: string;
  animals: number;
}

const mockShelters: Shelter[] = [
  { id: 1, name: "Huellas Felices", city: "Madrid", phone: "912345678", address: "Calle de la Suerte 45", animals: 12 },
  { id: 2, name: "Bosque de Amigos", city: "Barcelona", phone: "934567890", address: "Av. Diagonal 200", animals: 8 },
  { id: 3, name: "Santuario Felino", city: "Bilbao", phone: "944123456", address: "Gran Vía 15", animals: 15 },
];

export default function SheltersManagement() {
  const [shelters] = useState<Shelter[]>(mockShelters);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingShelter, setEditingShelter] = useState<Shelter | null>(null);

  const openCreate = () => {
    setEditingShelter(null);
    setModalOpen(true);
  };

  const openEdit = (shelter: Shelter) => {
    setEditingShelter(shelter);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
            Gestión de Protectoras
          </h2>
          <p className="text-[#404943] mt-1">Administra las organizaciones registradas.</p>
        </div>
        <button
          onClick={openCreate}
          className="bg-[#421300] text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:brightness-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">add_business</span>
          Crear Protectora
        </button>
      </div>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#404943]">
          search
        </span>
        <input
          type="text"
          placeholder="Buscar protectora..."
          className="w-full pl-12 pr-4 py-3 bg-[#eceeec] rounded-xl border-none focus:ring-2 focus:ring-[#3c6749]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shelters.map((shelter) => (
          <div
            key={shelter.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-[#c0c9c1]/30 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
                  {shelter.name}
                </h3>
                <div className="flex items-center gap-1 text-[#404943] mt-1 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {shelter.city}
                </div>
              </div>
              <span className="bg-[#bbebc5] text-[#416c4d] px-3 py-1 rounded-full text-xs font-bold">
                {shelter.animals} Animales
              </span>
            </div>

            <div className="space-y-2 mb-6 text-[#404943] text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px]">call</span>
                {shelter.phone}
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px]">home_pin</span>
                {shelter.address}
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-[#eceeec]">
              <button
                onClick={() => openEdit(shelter)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#ffdbce] text-[#7f2b00] font-semibold text-sm hover:brightness-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">edit</span>
                Editar
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#ffdad6] text-[#ba1a1a] hover:bg-[#ba1a1a] hover:text-white transition-all">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#eceeec] flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#002819] font-['Plus_Jakarta_Sans']">
                {editingShelter ? "Editar Protectora" : "Crear Protectora"}
              </h3>
              <button onClick={() => setModalOpen(false)} className="p-2 hover:bg-[#e6e9e7] rounded-full">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#404943]">Nombre</label>
                <input
                  type="text"
                  defaultValue={editingShelter?.name || ""}
                  className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#404943]">Ciudad</label>
                  <input
                    type="text"
                    defaultValue={editingShelter?.city || ""}
                    className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#404943]">Teléfono</label>
                  <input
                    type="tel"
                    defaultValue={editingShelter?.phone || ""}
                    className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#404943]">Dirección</label>
                <textarea
                  defaultValue={editingShelter?.address || ""}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-[#eceeec] border-none focus:ring-2 focus:ring-[#3c6749] mt-1 resize-none"
                />
              </div>
            </div>

            <div className="px-6 py-4 flex gap-3 bg-[#f2f4f2]">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 py-3 rounded-full border border-[#717973] text-[#191c1b] font-semibold hover:bg-[#e6e9e7] transition-colors"
              >
                Cancelar
              </button>
              <button className="flex-1 py-3 rounded-full bg-[#421300] text-white font-semibold hover:brightness-110 active:scale-95 transition-all">
                {editingShelter ? "Guardar Cambios" : "Crear"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import DateDivider from "./components/DateDivider";
import HeroAnimal from "./components/HeroAnimal";
import MessageInputBar from "./components/MessageInputBar";
import ReceivedMessage from "./components/ReceivedMessage";
import SentMessage from "./components/SentMessage";

export default function Chat() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-margin-mobile py-base h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button aria-label="Volver"
              className="p-2 hover:bg-surface-container-high rounded-full transition-colors active:scale-90">
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <div className="relative">
              <img alt="Protectora La Esperanza Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-secondary-container"
                data-alt="A professional and warm portrait of a smiling woman in her 40s wearing a green nature-themed uniform. She is outdoors in a sunlit animal sanctuary with soft foliage in the background. The lighting is high-key and natural, creating a trustworthy and welcoming atmosphere. The photography style is modern and clean, consistent with a high-end pet adoption app aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaQoRaTghBz5WYz25_jm5_2RXUn4cdSOenSOljgvKeyc0xOwGFsZUbi2DAc6tJgURKIVX6hpYORNJia5bu4KDYCbPZDCTUuhmb6y686iAtryvD046LblgXIwcXBinUdfO75isqSF7WIhJ1ZCLKD7fvKd6z-_aE-cGuFPtofZWWJ9ckuwBfnl5kKG9zxEcp6f5hy5UmPIfFX14kWfE-4Nip2lQ_Qc1y5UhYG2taBzj669VzeZv4qGlE8CGjR57DXw2pJhWofq9YJs_E" />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></span>
            </div>
            <div>
              <h1 className="font-label-md text-label-md text-on-surface">Protectora La Esperanza</h1>
              <p className="font-label-sm text-label-sm text-secondary">En línea</p>
            </div>
          </div>
          <button aria-label="Información"
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors active:scale-90">
            <span className="material-symbols-outlined text-on-surface-variant">info</span>
          </button>
        </div>
      </header>

      <main className="chat-container pt-20 pb-24 overflow-y-auto px-margin-mobile flex flex-col gap-6">
        <HeroAnimal />
        <DateDivider date="Hoy" />
        <ReceivedMessage />
        <SentMessage />
      </main>

      <MessageInputBar />
    </>
  );
}

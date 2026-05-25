export default function Hero() {
    return (
        <section className="relative pt-12">
            <div className="text-center mb-16">
                <h2 className="font-headline-xl text-headline-xl text-primary leading-tight">
                    Todo lo que tus <br /> <span className="text-secondary">mascotas aman</span>
                </h2>
            </div>
            <div className="relative max-w-sm mx-auto">

                <div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 w-64 md:w-80 pop-out-shadow transition-transform duration-500 hover:scale-105 cursor-pointer">
                    <img alt="Perro amigable" className="w-full h-auto"
                        data-alt="A studio portrait of a friendly Golden Retriever dog with its paws resting on an invisible ledge, looking directly at the camera with expressive, soulful eyes. The dog is professionally photographed against a transparent background to enable the UI's pop-out effect. The lighting is warm and soft, highlighting the golden texture of its fur, creating a sense of joy and trust."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHQZ3Nmcph31yfRMVCzKVJbuqack_V6r8rDaCWQxQfFKKQhuSxkJ6v-s-1pF2t7_rB8h4cwVKzB7CqzYlovZMnyco9PCSbTQPzgm7f5aS0bMolRMMwEmO24qm1QjKAd1tx-yHSr0GkSfp3P1RzRqC9tGAt3lU9H9JEKzRax7kC__eyZA4-ZIK_TnXsMx2vfUU1DJByX799IAifmugn1AWO5B1IsB6or9LEZiZaCA1acSgiVj5N8pSa92tKQs0Z6QtYiETN2v1hUzwj" />
                </div>

                <div className="bg-primary pt-32 pb-8 px-8 rounded-3xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full"
                            style={{ backgroundImage: "radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px", }}>
                        </div>
                    </div>
                    <p className="font-body-md text-primary-fixed-dim mb-6 relative z-20">
                        Los mejores productos y cuidados <br /> para tu mejor amigo.
                    </p>
                    <button
                        className="bg-warm-orange text-white px-8 py-3.5 rounded-full font-label-md flex items-center justify-center gap-2 mx-auto active:scale-95 transition-transform relative z-20 shadow-md">
                        Explorar Productos
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>

    )
}
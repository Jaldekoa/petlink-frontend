interface HeroAnimalProps {
    img?: string;
    name?: string;
    description?: string;
    featureOne?: string;
    featureTwo?: string;
}

export default function HeroAnimal({
    img = "https://lh3.googleusercontent.com/aida-public/AB6AXuBTFM2tYQP17qVZ5EpY2dap4U7LTBL_a2P7pBjrVR1qNp8U7virryy9cfloKBL3xIUGA9KLST5FhePiDIqOMDUkXC7JmRzhgc1AkUFi7h1540-eTDLbLYHoeIP3HfYlLVzGs-X3xEluPidfVWoK8eXj8HFlpfxN2u8yjL0DCGSicP29fTPZpsKXOYfHbbYHoqmhidn_NXl0E0a9HSnonr4lMqcJXPY_yiQ_cZhAHNpf87v2alM7pJ8vpUtKKhCECVordaSh-EgPrNcx",
    name = "Bruno",
    description = "Bruno es muy tranquilo en interiores. Mientras tenga sus paseos diarios, se adapta perfectamente a espacios pequeños.",
    featureOne = "2 años",
    featureTwo = "Mediano"
}: HeroAnimalProps) {
    return (
        <div className="relative mt-8 mb-4">
            <div
                className="bg-secondary-container/30 rounded-3xl p-6 pt-16 mt-12 relative overflow-visible border border-secondary-container/20">
                {/*<!-- The "Pop-out" Image -->*/}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32">
                    <img alt="Bruno the dog"
                        className="w-full h-full object-cover rounded-full pop-out-image border-4 border-surface"
                        data-alt="A charming brown and white beagle dog looking directly at the camera with expressive, soulful eyes. The dog is positioned as if it's peering over an invisible ledge, creating a playful 'popping out' effect. The background is removed to emphasize the organic form. The lighting is bright and warm, emphasizing the soft texture of its fur, fitting a friendly and vibrant pet adoption interface."
                        src={img} />
                </div>
                <div className="text-center">
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{name}</h3>
                    <div className="flex justify-center gap-2 mb-4">
                        <span
                            className="bg-surface-container-lowest text-secondary px-3 py-1 rounded-full text-label-sm font-label-sm">{featureOne}</span>
                        <span
                            className="bg-surface-container-lowest text-secondary px-3 py-1 rounded-full text-label-sm font-label-sm">{featureTwo}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">"{description}"</p>
                </div>
            </div>
        </div>
    )
}
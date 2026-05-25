export default function AnimalCard({ animalImg, animalName, animalAge, animalSex, featureOne, featureTwo }: { animalImg: string, animalName: string, animalAge: string, animalSex: string, featureOne: string, featureTwo: string }) {
    return (

        <div className="min-w-70 snap-center pt-16 group cursor-pointer">
            <div
                className="relative bg-secondary-container rounded-3xl p-6 h-64 flex flex-col justify-end overflow-visible shadow-sm hover:shadow-md transition-shadow">
                <img alt="Gato en adopción"
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 pop-out-shadow group-hover:scale-110 transition-transform duration-300"
                    data-alt="A cute ginger tabby cat looking curiously with bright green eyes, captured in a studio setting with soft lighting. The cat's head and paws are positioned to overlap the top of a UI card, creating a playful 3D effect. The overall aesthetic is clean and minimalist, matching the soft mint green background of the card container."
                    src={animalImg} />
                <div className="text-center space-y-1">
                    <span className="bg-white/50 text-secondary px-3 py-1 rounded-full font-label-sm">{animalAge} •
                        {animalSex}</span>
                    <h4 className="font-headline-md text-on-secondary-container">{animalName}</h4>
                    <div className="flex justify-center gap-1">
                        <span
                            className="bg-on-secondary-container/10 px-2 py-1 rounded-lg font-label-sm text-on-secondary-container">{featureOne}</span>
                        <span
                            className="bg-on-secondary-container/10 px-2 py-1 rounded-lg font-label-sm text-on-secondary-container">{featureTwo}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
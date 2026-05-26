import AnimalCard from "./AnimalCard";
import type { AnimalCardProps } from "./AnimalCard";


export default function AnimalGrid({ animalItems }: { animalItems: Array<AnimalCardProps> }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {animalItems.map((item, index) => (<AnimalCard key={item.name + index} animalData={item} />))}
        </section>
    )
}
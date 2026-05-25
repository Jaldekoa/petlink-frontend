import AnimalCard from "./Animal"

export default function Adoptions() {
    return (
        <section className="space-y-stack-md">
            <div className="flex justify-between items-end">
                <h3 className="font-headline-md text-headline-md text-primary">Nuevos amigos</h3>
                <a className="font-label-md text-secondary hover:underline" href="#">Ver todos</a>
            </div>
            <div
                className="flex gap-gutter-mobile overflow-x-auto no-scrollbar pb-8 -mx-margin-mobile px-margin-mobile snap-x">
                <AnimalCard
                    animalName="Oliver"
                    animalAge="2 años"
                    animalSex="Macho"
                    featureOne="Amigable"
                    featureTwo="Vacunado"
                    animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuArW15tzo7Qd2OTxFXky_WHUnweF2CfExuhxLONOip6Goev1ZUiXhlHaZM7pEPHSaWVdTXfP16ohMVfRhPbM76GDGmEt5OKJOgx6taJcuLb-KuxuZk9vrwol0nIDZjZwd3qyuJe5qDEMIf0S65Ou2knkLuzVqAPqXgOt_IEc7B_GivrCBWZlEmxyt46M9JanBCH2pu8w7_J_Qc9OGqlSkcG8LSINvev7gIDH8oiverUv3iqFcDGODObsYkqfyUSjGBxXxTBTodehPoQ"
                />
                <AnimalCard
                    animalName="Luna"
                    animalAge="4 meses"
                    animalSex="Hembra"
                    featureOne="Juguetona"
                    featureTwo="Activa"
                    animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDOe6vC3eshnhwuwr_AQbYLbtvcpQWjrAYm16bEtUGMgbK8uUD1x2NIU9O7CoDOgeDjzAB2UsgZfX3qJCh3d2VEbZqPP9-r1r8BY-juKk2i0NrqV0pRLGtICiX1owCVpGdsP1Y_gWm95dPSz4RabhNOQiifprP4GZnG-QM9kTsaYx5J9LyjJa_3yyvy54XirLz7C1FHm6izGT68nhvNrpoNi7z1rzNla5B0vDOqiaq9TwSSGaPDGmNzg8kEdp77VOkH5YojbM0eOPC0"
                />
                <AnimalCard
                    animalName="Nube"
                    animalAge="1 año"
                    animalSex="Macho"
                    featureOne="Tranquila"
                    featureTwo="Social"
                    animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCzkfKt_5NhrxFJMn-rIm0mDG47SKP5WQ_sUnwnxwRcymEQaByD0V5WbMeqknzC7QMXKBI4U_OcLGazVjhVB0PZyruLvkZ4bGHg3MdNfRU2ngFm_EpdrZ-K3PjCeWf8uTipeeJ18Nj39TcrPv7aXCLkNaQ7Hnr5zptQDMRCAjlKrzrpmqqYQtr3lJp4f03oX25YW329d5XzOxaR-pIThjqpS7AiqkCrhPuq7RL-NYwEMrh8c5K_r-YDf79kebPAf0bs2iR4zIJ1LrHf"
                />
                <AnimalCard
                    animalName="Oliver"
                    animalAge="2 años"
                    animalSex="Macho"
                    featureOne="Amigable"
                    featureTwo="Vacunado"
                    animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuArW15tzo7Qd2OTxFXky_WHUnweF2CfExuhxLONOip6Goev1ZUiXhlHaZM7pEPHSaWVdTXfP16ohMVfRhPbM76GDGmEt5OKJOgx6taJcuLb-KuxuZk9vrwol0nIDZjZwd3qyuJe5qDEMIf0S65Ou2knkLuzVqAPqXgOt_IEc7B_GivrCBWZlEmxyt46M9JanBCH2pu8w7_J_Qc9OGqlSkcG8LSINvev7gIDH8oiverUv3iqFcDGODObsYkqfyUSjGBxXxTBTodehPoQ"
                />
            </div>
        </section>
    )
}
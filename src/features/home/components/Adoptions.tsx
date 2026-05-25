import AnimalCard from "../../../shared/components/main/AnimalCard";

export default function Adoptions() {
  return (
    <>
      <section className="space-y-5">
        {/* Header */}
        <div className="flex justify-between items-end px-margin-mobile">
          <h3 className="font-headline-md text-headline-md text-primary">
            Nuevos amigos
          </h3>

          <button className="font-label-md text-secondary hover:underline">
            Ver todos
          </button>
        </div>

        {/* Carrusel */}
        <div
          className="
          flex
          gap-4
          overflow-x-auto
          no-scrollbar
          snap-x
          snap-mandatory
          scroll-smooth
          px-margin-mobile
          pb-4
        "
        >
          <AnimalCard
            animalName="Oliver"
            animalAge="2 años"
            animalLocation="Bilbao, Bizkaia"
            animalEnergy="Amigable"
            animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuArW15tzo7Qd2OTxFXky_WHUnweF2CfExuhxLONOip6Goev1ZUiXhlHaZM7pEPHSaWVdTXfP16ohMVfRhPbM76GDGmEt5OKJOgx6taJcuLb-KuxuZk9vrwol0nIDZjZwd3qyuJe5qDEMIf0S65Ou2knkLuzVqAPqXgOt_IEc7B_GivrCBWZlEmxyt46M9JanBCH2pu8w7_J_Qc9OGqlSkcG8LSINvev7gIDH8oiverUv3iqFcDGODObsYkqfyUSjGBxXxTBTodehPoQ"
          />

          <AnimalCard
            animalName="Luna"
            animalAge="4 meses"
            animalLocation="Bilbao, Bizkaia"
            animalEnergy="Juguetona"
            animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDOe6vC3eshnhwuwr_AQbYLbtvcpQWjrAYm16bEtUGMgbK8uUD1x2NIU9O7CoDOgeDjzAB2UsgZfX3qJCh3d2VEbZqPP9-r1r8BY-juKk2i0NrqV0pRLGtICiX1owCVpGdsP1Y_gWm95dPSz4RabhNOQiifprP4GZnG-QM9kTsaYx5J9LyjJa_3yyvy54XirLz7C1FHm6izGT68nhvNrpoNi7z1rzNla5B0vDOqiaq9TwSSGaPDGmNzg8kEdp77VOkH5YojbM0eOPC0"
          />

          <AnimalCard
            animalName="Nube"
            animalAge="1 año"
            animalLocation="Bilbao, Bizkaia"
            animalEnergy="Tranquila"
            animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCzkfKt_5NhrxFJMn-rIm0mDG47SKP5WQ_sUnwnxwRcymEQaByD0V5WbMeqknzC7QMXKBI4U_OcLGazVjhVB0PZyruLvkZ4bGHg3MdNfRU2ngFm_EpdrZ-K3PjCeWf8uTipeeJ18Nj39TcrPv7aXCLkNaQ7Hnr5zptQDMRCAjlKrzrpmqqYQtr3lJp4f03oX25YW329d5XzOxaR-pIThjqpS7AiqkCrhPuq7RL-NYwEMrh8c5K_r-YDf79kebPAf0bs2iR4zIJ1LrHf"
          />
        </div>
      </section>
      <section className="space-y-5">
        {/* Header */}
        <div className="flex justify-between items-end px-margin-mobile">
          <h3 className="font-headline-md text-headline-md text-primary">
            Nuevos amigos
          </h3>

          <button className="font-label-md text-secondary hover:underline">
            Ver todos
          </button>
        </div>

        {/* Carrusel */}
        <div
          className="
          flex
          gap-4
          overflow-x-auto
          no-scrollbar
          snap-x
          snap-mandatory
          scroll-smooth
          px-margin-mobile
          pb-4
        "
        >
          <AnimalCard
            animalName="Oliver"
            animalAge="2 años"
            animalLocation="Bilbao, Bizkaia"
            animalEnergy="Amigable"
            animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuArW15tzo7Qd2OTxFXky_WHUnweF2CfExuhxLONOip6Goev1ZUiXhlHaZM7pEPHSaWVdTXfP16ohMVfRhPbM76GDGmEt5OKJOgx6taJcuLb-KuxuZk9vrwol0nIDZjZwd3qyuJe5qDEMIf0S65Ou2knkLuzVqAPqXgOt_IEc7B_GivrCBWZlEmxyt46M9JanBCH2pu8w7_J_Qc9OGqlSkcG8LSINvev7gIDH8oiverUv3iqFcDGODObsYkqfyUSjGBxXxTBTodehPoQ"
          />

          <AnimalCard
            animalName="Luna"
            animalAge="4 meses"
            animalLocation="Bilbao, Bizkaia"
            animalEnergy="Juguetona"
            animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDOe6vC3eshnhwuwr_AQbYLbtvcpQWjrAYm16bEtUGMgbK8uUD1x2NIU9O7CoDOgeDjzAB2UsgZfX3qJCh3d2VEbZqPP9-r1r8BY-juKk2i0NrqV0pRLGtICiX1owCVpGdsP1Y_gWm95dPSz4RabhNOQiifprP4GZnG-QM9kTsaYx5J9LyjJa_3yyvy54XirLz7C1FHm6izGT68nhvNrpoNi7z1rzNla5B0vDOqiaq9TwSSGaPDGmNzg8kEdp77VOkH5YojbM0eOPC0"
          />

          <AnimalCard
            animalName="Nube"
            animalAge="1 año"
            animalLocation="Bilbao, Bizkaia"
            animalEnergy="Tranquila"
            animalImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCzkfKt_5NhrxFJMn-rIm0mDG47SKP5WQ_sUnwnxwRcymEQaByD0V5WbMeqknzC7QMXKBI4U_OcLGazVjhVB0PZyruLvkZ4bGHg3MdNfRU2ngFm_EpdrZ-K3PjCeWf8uTipeeJ18Nj39TcrPv7aXCLkNaQ7Hnr5zptQDMRCAjlKrzrpmqqYQtr3lJp4f03oX25YW329d5XzOxaR-pIThjqpS7AiqkCrhPuq7RL-NYwEMrh8c5K_r-YDf79kebPAf0bs2iR4zIJ1LrHf"
          />
        </div>
      </section>
    </>
  );
}

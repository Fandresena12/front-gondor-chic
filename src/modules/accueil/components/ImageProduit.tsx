import Image from "next/image";

const ImageProduit = () => (
  <Image
    src="/assets/produit-du-jour.png"
    alt="Médaillon de l'Étoile d'Obsidienne"
    width={300}
    height={200}
    className="h-auto object-contain items-center justify-center"
    priority
  />
);

export default ImageProduit;

import ImageProduit from "./ImageProduit";
import DescriptionProduit from "./DescriptionProduit";

const ProduitDuJour = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-40 w-full">
      <div className="w-80 flex-shrink-0 items-center justify-center flex-col">
      <div className="mb-8">
          <span className="inline-block bg-[linear-gradient(90deg,rgba(69,63,58,0)_0%,rgba(69,63,58,0)_5%,rgba(69,63,58,1)_28%,rgba(69,63,58,1)_70%,rgba(69,63,58,0)_95%,rgba(69,63,58,0)_100%)] text-white px-16 py-1  text-xl italic">
            Produit du jour
          </span>
        </div>
        <ImageProduit />
      </div>
      <div className="flex-1">
        <DescriptionProduit />
      </div>
    </div>
  );
};

export default ProduitDuJour;

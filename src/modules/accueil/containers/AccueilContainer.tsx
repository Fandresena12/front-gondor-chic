import ProduitDuJour from "../components/ProduitDuJour";
import Image from "next/image";

const AccueilContainer = () => {
  return (
    <main className="relative flex flex-col items-center min-h-screen overflow-hidden">
     

      <Image
        src="/assets/svg/flower.svg"
        alt="Décoration fleur"
        className="absolute z-10 -bottom-36 -left-20"
        width={300}
        height={300}
        priority
      />

      <section className="relative z-20 w-full max-w-6xl px-4 mx-auto py-14">
        <ProduitDuJour />
      </section>
    </main>
  );
};

export default AccueilContainer;

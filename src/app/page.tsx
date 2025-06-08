"use client";
import NavbarContainer from "../shared/navbar/containers/NavbarContainer";
import AccueilContainer from "../modules/accueil/containers/AccueilContainer";
import LoginContainer from "../modules/connexion/containers/LoginContainer";
import AccueilBackground from "../modules/accueil/components/AccueilBackground";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e3d0] overflow-hidden">
      <NavbarContainer className="relative z-20" />
      <AccueilContainer />
      <LoginContainer />
      <AccueilBackground />
    </div>
  );
}

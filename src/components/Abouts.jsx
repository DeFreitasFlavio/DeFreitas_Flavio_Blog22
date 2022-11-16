import React from "react";

import Arrow from "../assets/noun-arrow.svg";

function Abouts() {
  return (
    <section class="section-1">
      <div className="p-8 H w-full flex-col flex justify-around items-center PlaceImage">
        <div className="w-3/4">
          <p className="text-Form leading-none">Bonjour, je m'appelle</p>
          <h1 className="text-Title font-bold leading-none text-Blue">
            De Freitas Flavio
          </h1>
          <h2 className="text-Subtitle font-semibold pt-4 ">À propos</h2>
          <p className="text-Text pt-4 ">
            J’ai 19 ans je suis étudiant en bachelor 3 informatique
            spécialisation Développeur Web à Bordeaux Ynov Campus, je suis
            passionné de nouvelles technologies, de science et d'espace, doté
            d’une grande curiosité et de motivation, en quête de nouveaux
            challenges
          </p>
        </div>
        <a href="#Projets" className="scroll-smooth">
          <img src={Arrow} alt="SVG logo image" className="w-24 h-24" />
        </a>
      </div>
    </section>
  );
}

export default Abouts;

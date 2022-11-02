import React from "react";

// Components

import Header from "./components/Header";
import Footers from "./components/Footer";
import Boxs from "./components/Boxs";

// Image

import Tel from "./assets/telephone.png";

function App() {
  let LookBoolean = false;

  function Look() {
    if (LookBoolean == false) {
      document.addEventListener("click", () => {
        Block.classList.add("Look");
      });
      console.log("enable");
      LookBoolean = true;
    } else if (LookBoolean == true) {
      document.addEventListener("click", () => {
        Block.classList.remove("Look");
      });
      console.log(LookBoolean);
      LookBoolean = false;
    }
  }
  let LookBoolean1 = false;

  function Look1() {
    if (LookBoolean1 == false) {
      document.addEventListener("click", () => {
        Block1.classList.add("Look");
      });
      console.log("enable");
      LookBoolean1 = true;
    } else if (LookBoolean1 == true) {
      document.addEventListener("click", () => {
        Block1.classList.remove("Look");
      });
      console.log(LookBoolean1);
      LookBoolean1 = false;
    }
  }

  return (
    <div className="w-full h-full font-propre">
      <Header />
      <Boxs />
      <div
        id="About"
        className="p-8 H w-full flex-col flex justify-center items-center"
      >
        <div className="w-3/4">
          <p classname="text-Form leading-none">Bonjour, je m'appelle</p>
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
      </div>

      <div className="p-10">
        <h2 id="Projets" className="text-Subtitle pl-4">
          Projets
        </h2>
      </div>

      <div className="w-full flex justify-center items-center xs:flex-col">
        <div className="w-96 h-64 Tls bg-no-repeat bg-contain bg-left mr-6 xs:mr-0"></div>

        <div className="w-1/3 h-full flex flex-col xs:w-3/4">
          <p className="text-Subtitle font-Strong">
            The Last Survivor on the space
          </p>
          <p className="text-Text break-normal pt-4">
            Shoot'em up d'alien, top-down shooter, crée avec GameMaker Studio 2
          </p>
          <div className="flex justify-end">
            <input
              type="button"
              onClick={Look}
              value="En savoir plus"
              className="Plus"
            />
          </div>
          <div onClick={Look} id="Block" className="Blur">
            <div className="rounded-2xl bg-white  w-2/4 h-2/4 px-4 xs:w-3/4">
              <div className="w-5/6 flex  items-end justify-around flex-row xs:flex-col xs:pr-0 xs:items-center">
                <div className="w-96 h-60 Tls bg-no-repeat bg-contain bg-left  xs:w-72"></div>
                <p className="text-Subtitle font-Strong ">
                  The Last Survivor on the space
                </p>
              </div>
              <p className="text-Text break-normal pt-4 pl-4"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <h2 id="ExperienceProfesionnel" className="text-Subtitle pl-4">
          Experience Profesionnel
        </h2>
      </div>
      <div className="w-full flex justify-center items-center pb-6 xs:flex-col">
        <div className="WrapperBox Myrhmica w-full h-full bg-no-repeat bg-contain bg-left mr-6 xs:mr-0"></div>

        <div className="w-1/3 flex flex-col xs:w-3/4">
          <p className="text-Subtitle font-Strong">PortraiScopie</p>
          <p className="text-Text break-normal pt-4">
            PortraiScopie est une nouvelle approche de l'entré dans le monde du
            travail ou de la reconversion, il apporte une nouvelle vision du CV
            ou plutôt une recentralisation des compétence qu'on pense vraiment
            avoir.
          </p>
          <div className="flex justify-end">
            <input
              type="button"
              onClick={Look1}
              value="En savoir plus"
              className="Plus"
            />
          </div>
          <div onClick={Look1} id="Block1" className="Blur">
            <div className="rounded-2xl bg-white  w-2/4 h-2/4 px-4 xs:w-3/4 xs:h-3/4">
              <div className="w-4/6 flex  items-end justify-around flex-row xs:flex-col xs:w-full xs:items-center">
                <div className="w-96 h-60 Myrhmica bg-no-repeat bg-contain bg-left xs:w-72 xs:h-52"></div>
                <p className="text-Subtitle font-Strong xs: text-Text">
                  PortraiScopie
                </p>
              </div>
              <p className="text-Text break-normal pt-2 pl-4 xs:text-Phone">
                Pour moi cette expérience était un vrai défi de très grande
                taille car je n'avais pas beaucoup d’expérience, et il y avait
                énormément de choses a faire et surtout beaucoup de docs a allez
                lire. Il y avait des problèmes que nous n'avions pas prévu donc
                certain fois le timing était serré mais tout ce finissais plutôt
                bien.
                <li className="pt-1">Maquette Figma</li>
                <li>Elements Css</li>
                <li>Fonction Javascript</li>
                <li>Compréhension du framework NextJs</li>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="Contact-me" className="position">
        <form method="post" action="#Contact-me">
          <p className="font-Strong text-Text">Contactez-moi</p>
          <div className="Name">
            <input
              type="text"
              name="user_name"
              placeholder="Nom Prenom"
              className="w-full"
            />
          </div>
          <div className="Company">
            <input
              type="text"
              name="Company"
              placeholder="Entreprise"
              className="w-full"
            />
          </div>
          <div className="Email">
            <input
              type="text"
              name="Email"
              placeholder="Adresse Mail"
              className="w-full"
            />
          </div>
          <div className="Message">
            <input
              type="text"
              name="Message"
              placeholder="Message"
              className="w-full"
            />
          </div>
          <input className="Submit" type="submit" placeholder="Envoyez" />
        </form>
        <div className="block w-52 m-5 p-1.5 border-black border flex justify-center items-center">
          <img src={Tel} />
          <p className="pl-4">07.67.02.66.41</p>
        </div>
      </div>
      <Footers />
    </div>
  );
}

export default App;

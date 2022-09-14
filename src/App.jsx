import React from "react";

// Components

import Header from "./components/Header";
import Footers from "./components/Footer";

// Image

import Tel from "./assets/telephone.png";
import info from "./assets/info.png";
import projet from "./assets/projet.png";
import ExpPro from "./assets/mallette.png";
import contact from "./assets/contact.png";

function App() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      box1.classList.add("scroll");
      box2.classList.add("scroll");
      box3.classList.add("scroll");
      box4.classList.add("scroll");
    }
    if (window.scrollY < 300) {
      box1.classList.remove("scroll");
      box2.classList.remove("scroll");
      box3.classList.remove("scroll");
      box4.classList.remove("scroll");
    }
  });
  return (
    <div className="WrapperContent">
      <Header />
      <div className="position: fixed left-0 bottom-1/2">
        <div
          id="box1"
          className="Box rounded-tr-lg transition ease-in-out delay-75"
        >
          <a href="#About">
            <img src={info} />
          </a>
        </div>
        <div id="box2" className="Box transition ease-in-out delay-75">
          <a href="#Projets">
            <img src={projet} />
          </a>
        </div>
        <div id="box3" className="Box transition ease-in-out delay-100">
          <a href="#ExperienceProfesionnel">
            <img src={ExpPro} />
          </a>
        </div>
        <div
          id="box4"
          className="Box rounded-br-lg transition ease-in-out delay-100"
        >
          <a href="#Contact-me">
            <img src={contact} />
          </a>
        </div>
      </div>

      <div id="#About" className="p-8">
        <h1 className="text-Title p-4 pl-10">De Freitas Flavio</h1>
        <h2 className="text-Subtitle font-Strong pl-4">À propos</h2>
        <p className="text-Text p-4 ss:w-3/4">
          J’ai 19 ans je suis étudiant en bachelor 3 informatique spécialisation
          Développeur Web à Bordeaux Ynov Campus, je suis passionné de nouvelles
          technologies, de science et d'espace, doté d’une grande curiosité et
          de motivation, en quête de nouveaux challenges
        </p>
      </div>

      <div className="p-10">
        <h2 id="Projets" className="text-Subtitle pl-4">
          Projets
        </h2>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="WrapperBox Tls bg-no-repeat bg-contain bg-left mr-6"></div>

        <div className="w-1/3 flex flex-col">
          <p className="text-Subtitle font-Strong">
            The Last Survivor on the space
          </p>
          <p className="text-Text break-normal pt-4">
            Shoot'em up d'alien, top-down shooter blabla
          </p>
          <div className="flex justify-end">
            <button className="Plus">En savoir plus</button>
          </div>
        </div>
      </div>

      <div className="p-10">
        <h2 id="ExperienceProfesionnel" className="text-Subtitle pl-4">
          Experience Profesionnel
        </h2>
      </div>
      <div className="w-full flex justify-center items-center pb-6">
        <div className="WrapperBox Myrhmica w-full h-full bg-no-repeat bg-contain bg-left mr-6"></div>

        <div className="w-1/3 flex flex-col">
          <p className="text-Subtitle font-Strong">PortraiScopie</p>
          <p className="text-Text break-normal pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <div className="flex justify-end">
            <button className="Plus">En savoir plus</button>
          </div>
        </div>
      </div>

      <div id="Contact-me" className="position">
        <form method="post" action="#Contact-me">
          <p className="font-Strong text-Text">Contactez-moi</p>
          <div className="Name">
            <input type="text" name="user_name" placeholder="Nom Prenom" />
          </div>
          <div className="Company">
            <input type="text" name="Company" placeholder="Entreprise" />
          </div>
          <div className="Email">
            <input type="text" name="Email" placeholder="Adresse Mail" />
          </div>
          <div className="Message">
            <input type="text" name="Message" placeholder="Message" />
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

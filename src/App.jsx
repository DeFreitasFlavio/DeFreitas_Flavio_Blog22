import React from "react";

import Tel from "./assets/telephone.png";
import Git from "./assets/github.png";
import info from "./assets/info.png";
import projet from "./assets/projet.png";
import ExpPro from "./assets/mallette.png";
import contact from "./assets/contact.png";

function App() {
  return (
    <div className="WrapperContent">
      <div class="Header" className="header">
        <a href="#About">À Propos</a>
        <a href="#Projets">Projets</a>
        <a href="#ExperienceProfesionnel">Expérience Professionnel</a>
        <a href="#Contact-me">Contactez-moi</a>
        <a href="https://www.canva.com/design/DAFEVWKDdOI/u51dD72fGk9T89RvajhfFA/edit?utm_content=DAFEVWKDdOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          CV
        </a>
      </div>

      <div id="Box" className="positionBox">
        <div className="Box">
          <img src={info} />
        </div>
        <div className="Box">
          <img src={projet} />
        </div>
        <div className="Box">
          <img src={ExpPro} />
        </div>
        <div className="Box">
          <img src={contact} />
        </div>
      </div>

      <div id="#About" className="WrapperTop">
        <h1 className="Title">De Freitas Flavio</h1>
        <h2 className="apropos">À propos</h2>
        <p className="Sfont p-4">
          J’ai 19 ans je suis étudiant en bachelor 3 informatique spécialisation
          Développeur Web à Bordeaux Ynov Campus, je suis passionné de nouvelles
          technologies, de science et d'espace, doté d’une grande curiosité et
          de motivation, en quête de nouveaux challenges
        </p>
      </div>

      <div className="SubTitle">
        <h2 id="Projets" className="MfontTitle">
          Projets
        </h2>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="WrapperBox Tls bg-no-repeat bg-contain bg-left mr-6"></div>

        <div className="w-1/3 flex flex-col">
          <p className="Strong">The Last Survivor on the space</p>
          <p className="text-lg break-normal pt-4">
            Shoot'em up d'alien, top-down shooter blabla
          </p>
          <div className="flex justify-end">
            <button className="Plus">En savoir plus</button>
          </div>
        </div>
      </div>

      <div className="SubTitle">
        <h2 id="ExperienceProfesionnel" className="MfontTitle">
          Experience Profesionnel
        </h2>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="WrapperBox Myrhmica w-full h-full bg-no-repeat bg-contain bg-left mr-6"></div>

        <div className="w-1/3 flex flex-col">
          <p className="Strong">PortraiScopie</p>
          <p className="text-lg break-normal pt-4">
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
          <p className="Strong">Contactez-moi</p>
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
        <div className="block">
          <img src={Tel} />
          <p className="Text">07.67.02.66.41</p>
        </div>
      </div>
      <div className="Footer">
        <div className="Line w-4/5 bg-black m-1.5"></div>
        <div className="logo">
          <a href="https://github.com/DeFreitasFlavio">
            <img src={Git} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

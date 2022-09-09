import React from "react";

import Tel from "./assets/telephone.png";
import Git from "./assets/github.png";
import TLS from "./assets/ProjetTLS.png";
import Myrhmica from "./assets/Myrhmica.png";
import info from "./assets/info.png";
import projet from "./assets/projet.png";
import ExpPro from "./assets/mallette.png";
import contact from "./assets/contact.png";

function App() {
  return (
    <div class="WrapperContent">
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

      <section id="#About" class="WrapperTop">
        <h1 className="Title">De Freitas Flavio</h1>
        <h2 className="apropos">À propos</h2>
        <p className="Sfont p-4">
          J’ai 19 ans je suis étudiant en bachelor 3 informatique spécialisation
          Développeur Web à Bordeaux Ynov Campus, je suis passionné de nouvelles
          technologies, de science et d'espace, doté d’une grande curiosité et
          de motivation, en quête de nouveaux challenges
        </p>
      </section>

      <section id="Projets" className="MfontTitle">
        Projets
      </section>
      <div class="WrapperProjets">
        <div className="WrapperBox">
          <img src={TLS} className="Image" />
        </div>

        <div class="WrapperInfos">
          <p className="Strong">The Last Survivor on the space</p>
          <p className="Sfont">Shoot'em up d'alien, top-down shooter blabla</p>
        </div>
        <button className="Plus">En savoir plus</button>
      </div>

      <div
        class="TextHeader"
        id="ExperienceProfesionnel"
        className="MfontTitle"
      >
        Experience Profesionnel
      </div>
      <div class="WrapperExpPro">
        <div className="WrapperBox">
          <img src={Myrhmica} className="Image" />
        </div>

        <div class="WrapperInfos">
          <p className="Strong">The Last Survivor on the space</p>
          <p className="Sfont">Shoot'em up d'alien, top-down shooter blabla</p>
        </div>
        <button className="Plus">En savoir plus</button>
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
        <div className="Line"></div>
        <div className="logo">
          <img src={Git} />
        </div>
      </div>
    </div>
  );
}

export default App;

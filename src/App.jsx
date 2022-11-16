import React from "react";

// Components

import Header from "./components/Header";
import Footers from "./components/Footer";
import Boxs from "./components/Boxs";
import Abouts from "./components/Abouts";
import Projets from "./components/Projets";
import ExperienceProfesionnel from "./components/ExperienceProfesionnel";

// Image

import Tel from "./assets/telephone.png";

function App() {
  return (
    <div className="w-full h-full font-propre">
      <Header />
      <Boxs />
      <Abouts />
      <Projets />
      <ExperienceProfesionnel />

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

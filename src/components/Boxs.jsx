import React from "react";

import info from "../assets/info.png";
import projet from "../assets/projet.png";
import ExpPro from "../assets/mallette.png";
import contact from "../assets/contact.png";

function Boxs() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      box1.classList.add("scroll");
      box2.classList.add("scroll");
      box3.classList.add("scroll");
      box4.classList.add("scroll");
      bo.classList.add("box");
    }
    if (window.scrollY < 300) {
      box1.classList.remove("scroll");
      box2.classList.remove("scroll");
      box3.classList.remove("scroll");
      box4.classList.remove("scroll");
      bo.classList.remove("box");
    }
  });
  return (
    <div id="bo" className="position: fixed Left bottom-1/2">
      <div id="box1" className="Box rounded-tr-lg">
        <a href="#About">
          <img src={info} />
        </a>
      </div>
      <div id="box2" className="Box">
        <a href="#Projets">
          <img src={projet} />
        </a>
      </div>
      <div id="box3" className="Box">
        <a href="#ExperienceProfesionnel">
          <img src={ExpPro} />
        </a>
      </div>
      <div id="box4" className="Box rounded-br-lg">
        <a href="#Contact-me">
          <img src={contact} />
        </a>
      </div>
    </div>
  );
}

export default Boxs;

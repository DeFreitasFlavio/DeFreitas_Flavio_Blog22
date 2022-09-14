import React from "react";

function Header() {
  return (
    <div className="text-Blue w-full h-14 flex justify-around items-center text-Text">
      <a href="#About" className="p-2">
        À Propos
      </a>
      <a href="#Projets" className="p-2">
        Projets
      </a>
      <a href="#ExperienceProfesionnel" className="p-2">
        Expérience Professionnel
      </a>
      <a href="#Contact-me" className="p-2">
        Contactez-moi
      </a>
      <a
        href="https://www.canva.com/design/DAFEVWKDdOI/u51dD72fGk9T89RvajhfFA/edit?utm_content=DAFEVWKDdOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        className="p-2"
      >
        CV
      </a>
    </div>
  );
}

export default Header;

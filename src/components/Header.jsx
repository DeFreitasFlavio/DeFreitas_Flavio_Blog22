import React from "react";

function Header() {
  const navlinks = [...document.querySelectorAll("div a")];
  const sections = [...document.querySelectorAll("section")];
  console.log(navlinks);

  let sectionsPosition;
  function positionCalculation() {
    sectionsPosition = sections.map((section) => {
      return section.offsetTop;
    });
  }
  positionCalculation();
  navlinks.forEach((link) => link.addEventListener("click", addScrollSmooth));

  function addScrollSmooth(e) {
    const linkIndex = navlinks.indexOf(e.target);
    window.scrollTo({
      top: sectionsPosition[linkIndex],
      behavior: "smooth",
    });
  }

  window.addEventListener("resize", positionCalculation);
  return (
    <div className="text-Blue font-medium w-full h-14 flex justify-around items-center text-Text xs:text-Phone">
      <a href="#About" className="p-2 hover:underline">
        À Propos
      </a>
      <a
        href="#Projets"
        onClick={addScrollSmooth}
        className="p-2 hover:underline"
      >
        Projets
      </a>
      <a
        href="#ExperienceProfesionnel"
        className=" p-2 hover:underline xs:w-24"
      >
        Expérience Professionnel
      </a>
      <a href="#Contact-me" className=" p-2 hover:underline">
        Contactez-moi
      </a>
      <a
        href="https://www.canva.com/design/DAFEVWKDdOI/u51dD72fGk9T89RvajhfFA/edit?utm_content=DAFEVWKDdOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        className="p-2 hover:underline"
      >
        CV
      </a>
    </div>
  );
}

export default Header;

import React from "react";

const ExperienceProfesionnel = () => {
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
    <section className="p-10">
      <h2 id="ExperienceProfesionnel" className="text-Subtitle pl-4">
        Experience Profesionnel
      </h2>
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
              <div className="w-full flex items-end justify-around flex-row ss:flex-col xs:flex-col xs:items-center ss:items-center">
                <div className="w-96 h-60 Myrhmica bg-no-repeat bg-contain bg-left xs:w-72 xs:h-52"></div>
                <p className="text-Subtitle font-Strong xs:text-Text">
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
    </section>
  );
};

export default ExperienceProfesionnel;

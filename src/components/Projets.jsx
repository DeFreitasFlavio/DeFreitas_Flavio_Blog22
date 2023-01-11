import React from "react";

const Projets = () => {
  let LookBoolean = false;
  const Block = document.querySelectorAll("#Block");
  console.log(Block);

  function Look() {
    if (LookBoolean == false) {
      document.addEventListener("click", () => {
        Block.classList.add("Look");
      });
      console.log(".add");
      LookBoolean = true;
    } else {
      document.addEventListener("click", () => {
        Block.classList.remove("Look");
      });
      console.log(".remove");
      LookBoolean = false;
    }
  }
  return (
    <section class="section-2" className="p-10">
      <h2 id="Projets" className="text-Subtitle pl-4 scroll-smooth">
        Projets
      </h2>

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
            <div className="rounded-2xl bg-white px-4 w-3/4 h-3/4">
              <div className="w-full flex items-end justify-around flex-row ss:flex-col xs:flex-col xs:items-center ss:items-center">
                <div className="w-72 h-52 md:w-96 md:h-60 Tls bg-no-repeat bg-contain bg-left "></div>
                <p className="text-Subtitle font-Strong xs:text-Text">
                  The Last Survivor on the space
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

      <div className="w-full flex justify-center items-center xs:flex-col">
        <div className="w-96 h-64 Tetris bg-no-repeat bg-contain bg-left mr-6 xs:mr-0"></div>

        <div className="w-1/3 h-full flex flex-col xs:w-3/4">
          <p className="text-Subtitle font-Strong">Tetris</p>
          <p className="text-Text break-normal pt-4">
            Tetris est un jeu vidéo de puzzle, crée avec Bastien Aumenier et
            Manoa Marchand
          </p>
          <div className="flex justify-end">
            <input
              type="button"
              onClick={Look}
              value="En savoir plus"
              className="Plus"
            />
          </div>
          <div onClick={Look} id="Block1" className="Blur">
            <div className="rounded-2xl bg-white px-4 w-3/4 h-3/4">
              <div className="w-full flex items-end justify-around flex-row ss:flex-col xs:flex-col xs:items-center ss:items-center">
                <div className="w-72 h-52 md:w-96 md:h-60 Tls bg-no-repeat bg-contain bg-left "></div>
                <p className="text-Subtitle font-Strong xs:text-Text">
                  The Last Survivor on the space
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

      <div className="w-full flex justify-center items-center xs:flex-col">
        <div className="w-96 h-64 Tetris bg-no-repeat bg-contain bg-left mr-6 xs:mr-0"></div>
        <div className="w-1/3 h-full flex flex-col xs:w-3/4">
          <p className="text-Subtitle font-Strong">Projets File Rouge</p>
          <p className="text-Text break-normal pt-4">
            Projets File Rouge est un site qui permet d'afficher des courses
            automobiles, crée avec Manoa Marchand
          </p>
          <div className="flex justify-end">
            <input
              type="button"
              onClick={Look}
              value="En savoir plus"
              className="Plus"
            />
          </div>
          <div onClick={Look} id="Block2" className="Blur">
            <div className="rounded-2xl bg-white px-4 w-3/4 h-3/4">
              <div className="w-full flex items-end justify-around flex-row ss:flex-col xs:flex-col xs:items-center ss:items-center">
                <div className="w-72 h-52 md:w-96 md:h-60 Tls bg-no-repeat bg-contain bg-left "></div>
                <p className="text-Subtitle font-Strong xs:text-Text">
                  Projets File Rouge
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

      <div className="p-8 pt-16 flex justify-center">
        <div className=" w-4/5 h-px bg-black"></div>
      </div>
    </section>
  );
};

export default Projets;

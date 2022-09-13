import React from "react";

import Git from "../assets/github.png";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-4/5 h-px bg-black m-1.5"></div>
      <div className="logo">
        <a href="https://github.com/DeFreitasFlavio">
          <img src={Git} />
        </a>
      </div>
    </div>
  );
}

export default Footer;

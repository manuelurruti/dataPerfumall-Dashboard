import React from "react";
import header from "./header.css"
import Logo from "../img/Logo.png"
function Header() {
  return (<div>
    <header className="header">
      <nav className="navbar">
        <h1>PERFUMALL</h1>
        <ul className="ulHeader">
          <li className="liHeader"><a href="https://github.com/ArianaBelgrado/perfumall">Repositorio</a></li>
          <li className="liHeader"><a href="https://perfumall-mv7u.onrender.com/">Proyecto</a></li>

        </ul>
      </nav>
    </header>
  </div>);
}

export default Header;
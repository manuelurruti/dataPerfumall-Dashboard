import React from "react";
import header from "./header.css"
import Logo from "../img/Logo.png"
function Header() {
  return ( <div>
    <header className="header">
     
        <img   src={Logo} alt="asd"
        width={400}
                    height={150}/>
                   
          <ul className="ulHeader">
            <div className="boxHeader">
            <li className="liHeader">Ganancias</li>
               <h3 className="paddh3">$</h3>
               </div>
               <div className="boxHeader">
            <li className="liHeader">Ventas</li>
               <h3 className="paddh3">$</h3>
               </div>
               <div className="boxHeader">
            <li className="liHeader">Año y mes</li>
               <input type="date" className="paddh33"></input>
               </div>
          </ul>
     
    </header>
  </div> );
}

export default Header;
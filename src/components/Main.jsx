import React from "react";
import header from "./main.css"
import Logo from "../img/Logo.png"
function Main() {
  return (<div>
    <main id="main">

      <ul className="ulFlex">
        <li className="liMain">Cantidad de usuarios: </li>
        <li className="liMain">Cantidad de productos: </li>
        <li className="liMain">Cantidad de marcas: </li></ul>


      <div className="main">

        <ul className="ulUlt">
          <li className="liUlt">Ultimo usuario registrado</li>
          <li className="liUlt">Ultimo producto registrado</li>
          <li className="liUlt">Cantidad de producto por marca</li>
        </ul>

        <div className="derecha">
          <img className="img " src={Logo}
            width={350}
            height={200} />
          <ul className="ultDatos">
            <li>Usuario Nro:</li>
            <li>Nombre:</li>
            <li>Apellido:</li>
            <li>Localidad:</li>
          </ul>
        </div>

      </div>

      <ul className="lastUl">
        <li className="lastLi">Producto mas visto:</li>
        <li className="lastLi">Producto menos visto:</li>
        <li className="lastLi">Producto mas comprado:</li>
        <li className="lastLi">Producto menos comprado:</li>

      </ul>

    </main>

  </div>);
}

export default Main;
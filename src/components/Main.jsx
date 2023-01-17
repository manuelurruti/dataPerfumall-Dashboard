import React, { useEffect, useState } from "react";
import header from "./main.css"
import Logo from "../img/Logo.png"
import axios from "axios";
import Card from "./Card"

export const getAllProducts = async () =>
  await axios.get("http://localhost:4000/perfumall/api/v1/products")

export const getAllBrands = async () =>
  await axios.get("http://localhost:4000/perfumall/api/v1/products/brands")


export const getLastUser = async () =>
  await axios.get("http://localhost:4000/perfumall/api/v1/users/lastUser")

export const getAllUsers = async () =>
  await axios.get("http://localhost:4000/perfumall/api/v1/Users")

export const getlastProduct = async () =>
  await axios.get("http://localhost:4000/perfumall/api/v1/products/lastProduct")


function Main() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function loadGet() {
      const response = await getAllProducts()
      setProducts(response.data)
    }
    loadGet()
  }, [])




  const [users, setUsers] = useState([])
  useEffect(() => {
    async function loadGet() {
      const response = await getAllUsers()
      setUsers(response.data)
    }
    loadGet()
  }, [])






  const [productos, setProductos] = useState([])
  useEffect(() => {
    async function loadGet() {
      const response = await getAllBrands()
      setProductos(response.data)
    }
    loadGet()
  }, [])


  const [lastUser, setLastUser] = useState([])
  useEffect(() => {
    async function loadGet() {
      const response = await getLastUser()
      setLastUser(response.data)
    }
    loadGet()
  }, [])

  const [lastProduct, setlastProduct] = useState([])
  useEffect(() => {
    async function loadGet() {
      const response = await getlastProduct()
      setlastProduct(response.data)
    }
    loadGet()
  }, [])



  console.log(products);
  return (<div>
    <main id="main">

      <ul className="ulFlex">
        <li className="liMain">Cantidad de usuarios: {users.length}</li>
        <li className="liMain">Cantidad de productos: {products.length}</li>
        <li className="liMain">Cantidad de marcas: {productos.length} </li></ul>


      <div className="main">

        <ul className="ulUlt">
          <li className="liUlt">Ultimo usuario registrado: {lastUser.nombre} {lastUser.apellido}</li>
          <li className="liUlt">Ultimo producto registrado: {lastProduct.modelo}</li>
          <li className="liUlt">Cantidad de producto por marca:</li>
        </ul>

        <div className="derecha">
          <img className="img " alt="asdas" src={Logo}
            width={350}
            height={200} />
          <ul className="ultDatos">
            <li>Usuario Nro: </li>
            <Card users={users} />

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
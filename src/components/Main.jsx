import React, { useEffect, useState } from "react";
import header from "./main.css";
import Logo from "../img/Logo.png";
import CardUser from "./CardUser";
import CardProduct from "./CardProduct";
import {
    getAllProducts,
    getAllBrands,
    getAllUsers,
    getLastUser,
    getLastProduct,
} from "../data/apiPerfumall";

function Main() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [lastUser, setLastUser] = useState([]);
    const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        async function loadGet() {
            const responseAllProducts = await getAllProducts();
            const responseAllUsers = await getAllUsers();
            const responseAllBrands = await getAllBrands();
            const responseLastUser = await getLastUser();
            const responseLastProduct = await getLastProduct();

            setProducts(responseAllProducts.data);
            setUsers(responseAllUsers.data);
            setMarcas(responseAllBrands.data);
            setLastUser(responseLastUser.data);
            setLastProduct(responseLastProduct.data);
        }
        loadGet();
    }, []);
    console.log(products);

    return (
        <div>
            <main id="main">
                <ul className="ulFlex">
                    <div className="container-li">
                        <li className="liMain">
                            Cantidad de usuarios <h2>{users.length}</h2>
                        </li>
                    </div>
                    <div className="container-li">
                        <li className="liMain">
                            Cantidad de productos: <h2>{products.length}</h2>
                        </li>
                    </div>
                    <div className="container-li">
                        <li className="liMain">
                            Cantidad de marcas: <h2>{marcas.length} </h2>
                        </li>
                    </div>
                </ul>

                <div className="main">
                    <ul className="ulUlt">
                        <li className="liUlt">
                            Ultimo usuario registrado:
                            <h2>{lastUser.nombre + " " + lastUser.apellido}</h2>
                        </li>
                        <li className="liUlt">
                            Ultimo producto registrado:
                            <h2>{lastProduct.modelo}</h2>
                        </li>
                        <li className="liUlt">
                            Cantidad de producto por marca:
                        </li>
                    </ul>

                    <div className="derecha">
                        <ul className="ultDatos">
                            <CardUser users={users} />
                            <CardProduct products={products} />
                        </ul>
                    </div>
                </div>

                <ul className="lastUl">
                    <li className="lastLi">Producto mas comprado:</li>
                    <li className="lastLi">Producto menos comprado:</li>
                </ul>
            </main>
        </div>
    );
}

export default Main;

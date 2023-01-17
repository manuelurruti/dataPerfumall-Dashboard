import React, { useEffect, useState } from "react";
import header from "./main.css";
import Logo from "../img/Logo.png";
import Card from "./Card";
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

    return (
        <div>
            <main id="main">
                <ul className="ulFlex">
                    <li className="liMain">
                        Cantidad de usuarios: {users.length}
                    </li>
                    <li className="liMain">
                        Cantidad de productos: {products.length}
                    </li>
                    <li className="liMain">
                        Cantidad de marcas: {marcas.length}{" "}
                    </li>
                </ul>

                <div className="main">
                    <ul className="ulUlt">
                        <li className="liUlt">
                            Ultimo usuario registrado: {lastUser.nombre}{" "}
                            {lastUser.apellido}
                        </li>
                        <li className="liUlt">
                            Ultimo producto registrado: {lastProduct.modelo}
                        </li>
                        <li className="liUlt">
                            Cantidad de producto por marca:
                        </li>
                    </ul>

                    <div className="derecha">
                        <img
                            className="img "
                            alt="asdas"
                            src={Logo}
                            width={350}
                            height={200}
                        />
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
        </div>
    );
}

export default Main;

import React, { useEffect, useState } from "react";
import CardUser from "./CardUser";
import "./main.css";
import CardProduct from "./CardProduct";
import {
    getAllProducts,
    getAllBrands,
    getAllUsers,
    getLastUser,
    getLastProduct,
    getVentas,
} from "../data/apiPerfumall";

function Main() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [lastUser, setLastUser] = useState("");
    const [lastProduct, setLastProduct] = useState([]);
    const [sells, setSells] = useState([]);
    const [productMostBought, setProductMostBought] = useState({ asd: "asd" });
    const [productLessBought, setProductLessBought] = useState({ asd: "asd" });
    const [quantityPerBrand, setQuantityPerBrand] = useState([]);

    useEffect(() => {
        async function loadGet() {
            const responseAllProducts = await getAllProducts();
            const responseAllUsers = await getAllUsers();
            const responseAllBrands = await getAllBrands();
            const responseLastUser = await getLastUser();
            const responseLastProduct = await getLastProduct();
            const responseSells = await getVentas();

            setProducts(responseAllProducts.data);
            setUsers(responseAllUsers.data);
            setMarcas(responseAllBrands.data);
            setLastUser(responseLastUser.data);
            setLastProduct(responseLastProduct.data);
            setSells(responseSells.data.ventas);
        }
        console.log(productMostBought);

        loadGet();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            let productsToFind = {};

            sells.forEach(({ producto_id, cantidad }) => {
                if (!productsToFind[producto_id]) {
                    productsToFind[producto_id] = {
                        quantity: 0,
                    };
                }
                productsToFind[producto_id].quantity += cantidad;
            });

            const productsSortedMax = Object.entries(productsToFind)
                .sort((a, b) => b[1].quantity - a[1].quantity)
                .find(([product_id, { quantity }]) => quantity);

            setProductMostBought(
                products.find(({ id }) => productsSortedMax[0])
            );

            const productsSortedMin = Object.entries(productsToFind)
                .sort((a, b) => a[1].quantity - b[1].quantity)
                .find(([product_id, { quantity }]) => quantity);

            setProductLessBought(
                products.find(({ id }) => id == productsSortedMin[0])
            );
            console.log(productsSortedMin[0]);
            console.log(products.find(({ id }) => id === 4));

            console.log(productMostBought);
        }
    }, [sells, products]);

    useEffect(() => {
        if (products.length > 0) {
            const productsQuantity = products.reduce(
                (acc, { marca_id, id }) => {
                    if (!acc[marca_id]) {
                        acc[marca_id] = {
                            nombre: marcas.find(({ id }) => id == marca_id)
                                .nombre,
                            quantity: 1,
                        };
                    } else {
                        acc[marca_id].quantity += 1;
                    }

                    return acc;
                },
                {}
            );

            const arrayProductsQuantity = Object.values(productsQuantity);
            setQuantityPerBrand(arrayProductsQuantity);
        }
    }, [products]);

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
                            Cantidad de productos por marca:
                            {quantityPerBrand.map((e) => {
                                return (
                                    <h4>
                                        {e.nombre}: {e.quantity}
                                    </h4>
                                );
                            })}
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
                    <li className="lastLi">
                        Producto mas comprado:
                        <strong> {productMostBought.modelo}</strong>
                    </li>
                    <li className="lastLi">
                        Producto menos comprado:
                        <strong> {productLessBought.modelo}</strong>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Main;

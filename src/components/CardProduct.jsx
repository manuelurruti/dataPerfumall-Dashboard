import { useState, useEffect, useMemo } from "react";

const CardProduct = ({ products }) => {
    const [product, setProduct] = useState({ marca: { nombre: "" } });

    const handleFindById = (id) => {
        const productFound = products.find((e) => {
            return id === e.id;
        });
        setProduct(productFound);
    };

    return (
        <div className="container-card">
            <div className="container-select">
                <h4>Producto numero: </h4>
                <select
                    className="select"
                    onChange={(e) => handleFindById(parseInt(e.target.value))}
                >
                    {products.map((e) => {
                        return (
                            <option key={e.id} value={e.id}>
                                {e.id}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="select-info">
                <h4>Modelo: {product.modelo}</h4>
                <h4>Marca: {product.marca.nombre}</h4>
                <h4>Precio: $ {product.precio}</h4>
                <h4>Descuento: {product.descuento} %</h4>
                <h4>Fecha: {product.fecha_creacion} </h4>
                <h4>Stock: {product.stock} </h4>
                <h4>{product.descripcion}</h4>
            </div>
        </div>
    );
};

export default CardProduct;

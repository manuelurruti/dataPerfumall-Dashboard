import axios from "axios";

let url = "https://api-perfumall.onrender.com";
export const getAllProducts = async () =>
    await axios.get(`${url}/perfumall/api/v1/products`);

export const getAllBrands = async () =>
    await axios.get(`${url}/perfumall/api/v1/products/brands`);

export const getLastUser = async () =>
    await axios.get(`${url}/perfumall/api/v1/users/lastUser`);

export const getAllUsers = async () =>
    await axios.get(`${url}/perfumall/api/v1/Users`);

export const getLastProduct = async () =>
    await axios.get(`${url}/perfumall/api/v1/products/lastProduct`);
export const getVentas = async () =>
    await axios.get(`${url}/perfumall/api/v1/products/ventas`);

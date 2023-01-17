import axios from "axios";

export const getAllProducts = async () =>
    await axios.get("http://localhost:4000/perfumall/api/v1/products");

export const getAllBrands = async () =>
    await axios.get("http://localhost:4000/perfumall/api/v1/products/brands");

export const getLastUser = async () =>
    await axios.get("http://localhost:4000/perfumall/api/v1/users/lastUser");

export const getAllUsers = async () =>
    await axios.get("http://localhost:4000/perfumall/api/v1/Users");

export const getLastProduct = async () =>
    await axios.get(
        "http://localhost:4000/perfumall/api/v1/products/lastProduct"
    );

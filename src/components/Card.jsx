import React, { useState } from "react";

const Card = ({ users }) => {
    const [user, setUser] = useState(" ");

    const handleFindById = (id) => {
        const userFound = users.find((e) => {
            return id === e.id;
        });
        console.log(users);
        console.log(userFound);
        setUser(userFound);
    };

    return (
        <>
            <select onChange={(e) => handleFindById(parseInt(e.target.value))}>
                {users.map((e) => {
                    return (
                        <option key={e.id} value={e.id}>
                            {e.id}
                        </option>
                    );
                })}
            </select>
            <li>Nombre: {user.nombre}</li>
            <li>Apellido: {user.apellido}</li>
            <li>Localidad: {user.provincia}</li>
        </>
    );
};

export default Card;

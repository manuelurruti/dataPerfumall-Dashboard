import { useState, useEffect } from "react";

const CardUser = ({ users }) => {
    const [user, setUser] = useState({});

    const handleFindById = (id) => {
        const userFound = users.find((e) => {
            return id === e.id;
        });

        setUser(userFound);
    };

    useEffect(() => {
        if (users.length > 0) {
             setUser(users[0]);
        }
    }, [users]);

    return (
        <div className="container-card">
            <div className="container-select">
                <h4>Usuario numero: </h4>
                <select
                    className="select"
                    onChange={(e) => handleFindById(parseInt(e.target.value))}
                >
                    {users.map((e) => {
                        return (
                            <option key={e.id} value={e.id}>
                                {e.id}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="select-info">
                <h4>Nombre: {user.nombre}</h4>
                <h4>Apellido: {user.apellido}</h4>
                <h4>Mail: {user.email}</h4>
                <h4>Localidad: {user.provincia}</h4>
                <h4>Admin: {user.admin ? "si" : "no"}</h4>
            </div>
        </div>
    );
};

export default CardUser;

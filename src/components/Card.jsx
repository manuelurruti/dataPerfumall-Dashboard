import React, { useEffect, useState } from "react";

const Card = ({ users }) => {
  const [user, setUser] = useState(" ")
  const handleFindById = ((id) => {
    const userFound = users.find(user => {
      return user.id === id
    })
    console.log(id);
    setUser(userFound)
  })

  return (
    <>
      <select >
        {
          users.map((e) => {
            return (
              <option key={e.id} onClick={(e) => console.log("holis")} value={e.id}>{e.id}</option>
            )
          })
        }

      </select>
      <li>Nombre: {user.nombre}</li>
      <li>Apellido: {user.apellido}</li>
      <li>Localidad: {user.provincia}</li>
    </>

  )
}

export default Card
import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Formveterinarios from "./Form/Formveterinarios";
import styled from "styled-components";
import { Padre } from './Empleados'

const Veterinarios = () => {

    const { openModal, closeModal } = useModal(
        "Veterinarios",
        <Formveterinarios mostrarVeterinarios={mostrarVeterinarios} />
      );
      const [veterinarios, setVeterinarios] = useState([]);
    
      async function mostrarVeterinarios() {
        const response = await fetch("http://127.0.0.1:8000/api/Veterinarios", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const respuesta = await response?.json();
        setVeterinarios(respuesta);
        closeModal();
      }
      async function eliminarVeterinarios(id) {
        const response = await fetch("http://127.0.0.1:8000/api/Veterinarios/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        if (response.ok) {
          mostrarVeterinarios();
        }
      }
      useEffect(() => {
        mostrarVeterinarios();
      }, []);

  return (
    <Padre>
    <div>
<h1>Veterinarios</h1>
<p> Cantidad de registros {veterinarios.length}</p>
  <button onClick={openModal}> agregar</button>
</div>
<section>
  <p>R-Prpietarios</p>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>ci</th>
        <th>id_empleados</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {veterinarios.map((v) => (
        <tr key={v.id}>
          <td>{v.id}</td>
          <td>{v.ci}</td>
          <td>{v.id_empleados}</td>
          <td>
            <button>Editar</button>
            <button onClick={() => eliminarVeterinarios(v.id)}>
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>
</Padre>
  )
}

export default Veterinarios
import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Formpropietariomascotas from "./Form/Formpropietariomascotas";
import styled from "styled-components";
import { Padre } from './Empleados'

const Propietariomascotas = ({mostrarpropietariomascotas}) => {
    const { openModal, closeModal } = useModal(
        "Empleados",
        <Formpropietariomascotas mostrarpropietariomascotas={mostrarpropietariomascotas} />
      );
      const [promascotas, setpromascotas] = useState([]);
    
      async function mostrarpropietariomascotas() {
        const response = await fetch("http://127.0.0.1:8000/api/Propietario_mascotas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const respuesta = await response?.json();
        setpromascotas(respuesta);
        closeModal();
      }
      async function eliminarPropietario_mascotas(id) {
        const response = await fetch("http://127.0.0.1:8000/api/Propietario_mascotas/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        if (response.ok) {
          mostrarpropietariomascotas();
        }
      }
      useEffect(() => {
        mostrarpropietariomascotas();
      }, []);
      return (
        <Padre>
              <div>
          <h1>Propietario_mascotas</h1>
          <p> Cantidad de registros {promascotas.length}</p>
            <button onClick={openModal}> agregar</button>
          </div>
          <section>
            <p>R-Prpietarios</p>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>ci</th>
                  <th>nombres</th>
                  <th>apellidos</th>
                  <th>genero</th>
                  <th>direccion</th>
                  <th>telefono</th>
                  <th>telf_movil</th>
                  <th>correo</th>
                 
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {promascotas.map((v) => (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.ci}</td>
                    <td>{v.nombres}</td>
                    <td>{v.apellidos}</td>
                    <td>{v.genero}</td>
                    <td>{v.direccion}</td>
                    <td>{v.telefono}</td>
                    <td>{v.telf_movil}</td>
                    <td>{v.correo}</td>
                    <td>
                      <button>Editar</button>
                      <button onClick={() => eliminarPropietario_mascotas(v.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Padre>
      );
    };


export default Propietariomascotas

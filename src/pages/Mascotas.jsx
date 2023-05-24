import React, { useEffect } from 'react'
import { Padre } from './Empleados'
import { useModal } from "../hooks/useModal";
import Formmascotas from "./Form/Formmascotas";
import { useState } from 'react';

const Mascotas =(mostrarmascotas) =>{

    const { openModal, closeModal } = useModal(
        "Mascotas",
        <Formmascotas mostrarmascotas={mostrarmascotas} />
      );
      const [mascota, setMascota] = useState([]);
    
      async function mostrarmascotas() {
        const response = await fetch("http://127.0.0.1:8000/api/Mascotas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const respuesta = await response?.json();
        setMascota(respuesta);
        closeModal();
      }
      async function eliminarMascotas(id) {
        const response = await fetch("http://127.0.0.1:8000/api/Mascotas/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        if (response.ok) {
          mostrarmascotas();
        }
      }
      useEffect(() => {
        mostrarmascotas();
      }, []);


  return (
    <Padre>
          <div>
      <h1>Mascotas</h1>
      <p> Cantidad de registros {Mascotas.length}</p>
        <button onClick={openModal}> agregar</button>
      </div>
      <section>
        <p>R-Mascotas</p>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nombres</th>
              <th>fecha_nacimiento</th>
              <th>edad</th>
              <th>raza</th>
              <th>color</th>
              <th>peso</th>
              <th>longitud</th>
              <th>vacunas</th>
              <th>foto</th>
              <th>observaciones</th>
              {/* <th>id_estado_mascotas</th>
              <th>id_familia_mascotas</th>
              <th>id_genero_mascotas</th>
              <th>id_tipo_salida_mascotas</th>
              <th>id_veterinarios</th>
              <th>id_propietario_mascotas</th>
              <th>fecha_ingreso</th>
              <th>fecha_salida</th> */}
                                        
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mascota.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
              <td>{v.nombres}</td>
              <td>{v.fecha_nacimiento}</td>
              <td>{v.edad}</td>
              <td>{v.raza}</td>
              <td>{v.color}</td>
              <td>{v.peso}</td>
              <td>{v.longitud}</td>
              <td>{v.vacunas}</td>
              <td>{v.foto}</td>
              {/* <td>{v.observaciones}</td>
              <td>{v.id_estado_mascotas}</td>
              <td>{v.id_familia_mascotas}</td>
              <td>{v.id_genero_mascotas}</td>
              <td>{v.id_tipo_salida_mascotas}</td>
              <td>{v.id_veterinarios}</td>
              <td>{v.id_propietario_mascotas}</td>
              <td>{v.fecha_ingreso}</td>
              <td>{v.fecha_salida}</td> */}
                <td>
                  <button>Editar</button>
                  <button onClick={() => eliminarMascotas(v.id)}>
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

export default Mascotas

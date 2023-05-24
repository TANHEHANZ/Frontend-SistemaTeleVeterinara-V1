import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Formempleado from "./Form/Formempleado";
import styled from "styled-components";

const Empleados = (mostrarempleados) => {
  const { openModal, closeModal } = useModal(
    "Empleados",
    <Formempleado mostrarempleados={mostrarempleados} />
  );
  const [empleado, setEmpleado] = useState([]);

  async function mostrarempleados() {
    const response = await fetch("http://127.0.0.1:8000/api/Empleados", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setEmpleado(respuesta);
    closeModal();
  }
  async function eliminarempleados(id) {
    const response = await fetch("http://127.0.0.1:8000/api/Empleados/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      mostrarempleados();
    }
  }
  useEffect(() => {
    mostrarempleados();
  }, []);
  return (
    <Padre>
          <div>
      <h1>Empleados</h1>
      <p> Cantidad de registros {empleado.length}</p>
        <button onClick={openModal}> agregar</button>
      </div>
      <section>
        <p>R-Empleado</p>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>ci</th>
              <th>nombres</th>
              <th>genero</th>
              <th>foto</th>
              <th>direccion</th>
              <th>telefono</th>
              <th>telf_movil</th>
              <th>id_roles</th>
              <th>id_especializaciones</th>
              <th>id_departamentos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleado.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.ci}</td>
                <td>{v.nombres}</td>
                <td>{v.genero}</td>
                <td>{v.foto}</td>
                <td>{v.direccion}</td>
                <td>{v.telefono}</td>
                <td>{v.telf_movil}</td>
                <td>{v.id_roles}</td>
                <td>{v.id_especializaciones}</td>
                <td>{v.id_departamentos}</td>
                <td>
                  <button>Editar</button>
                  <button onClick={() => eliminarempleados(v.id)}>
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

export default Empleados;
 export const Padre = styled.article`
width:90%;
height:100%;
margin:2.5em auto;
& > div{
    width:100%;
    height:auto;
display:flex;
flex-direction:row;
gap:1em;
margin:2.5em 0 ;
align-items:center;

& h1{
    color:#225859;
    border-bottom:solid 1px #225859;
  
}
& p{
    font-size:0.9em;
    border-bottom:solid 1px #225859;

}
& button{
    height:2em;
    width:6em;
    border:none;
    font-size:0.7em;
    border-bottom:solid 1px #225859;
    background-color:transparent;
    text-transform:uppercase;
    cursor: pointer;
    transition:all 0.5s ease;
    &:hover{
        background-color:#225859;
        color:#fff;
    }
}
}
/* & table{
    width:80%;
    height:auto;
    margin:0 auto;

    & thead{
        background-color:#225859;
     
        & tr{
        padding:2em 0;
        border:solid 1px #0002;
    }
    }

} */

& table {
    margin: 1em auto;
    width: 90%;
    background-color:rgb(255, 255, 255);
    height: auto;
    border-collapse: collapse;
  
    & th {
      font-size:1em;
     font-weight:100;
     padding:1.2em 0;
 
    }
    &  tr{
    border:solid 1px #0002;
    &:nth-child(2n){
    background-color:#225859aa;
    color:#fff;

    }
    &:hover
  {
    background-color:#225859;
        color:#fff;
        transform:scale(1.08);
      transition:all 0.5s ease;
    box-shadow:0 0px 8px 4px #0005;
    & > td{
        color:#fff;
    }
    & button{
color:#fff;
    }
  }
    }
    & td{
      color:#225859;
      font-weight:lighter;
      font-size:0.8em;
      padding:0.8em 0;
      text-align:center;
    border-collapse: collapse;
      &:nth-child(1){
padding:0 1.5em;
   }
    }

    & thead {
     color:#225859;
     padding:1.2em 0;
     & > tr {
   border-radius:1em;
      &:hover{
        transform:scale(1);

        background-color:transparent;
        color:#069266;
        font-weight:100;
      }
     }
    }
& > tbody{
    & button{
    background-color:transparent;
    border:none;
    margin:0 0.5em ;
    color:#069266;
    cursor:pointer;
    }
}
   
  }
`;


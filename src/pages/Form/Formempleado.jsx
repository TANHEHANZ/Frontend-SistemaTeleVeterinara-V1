import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function Formempleado({ mostrarempleados }) {
  const [id_empleado, setId_empleado] = useState("");
  const [ci, setCi] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [genero, setGenero] = useState("");
  const [foto, setFoto] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telf_movil, setTelf_movil] = useState("");
  const [correo, setCorreo] = useState("");
  
  // para foraneas
  const [id_roles, setId_roles] = useState([]);
  const [id_especializaciones, setId_especializaciones] = useState([]);
  const [id_departamentos, setId_departamentos] = useState([]);
  const [id_municipios, setId_municipios] = useState([]);

  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/Empleados", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id_empleado: id_empleado,
        ci: ci,
        nombres: nombres,
        apellidos: apellidos,
        genero: genero,
        foto: foto,
        direccion: direccion,
        telefono: telefono,
        telf_movil: telf_movil,
        correo:correo,
        id_roles:id_roles,
        id_especializaciones:id_especializaciones,
        id_departamentos:id_departamentos,
        id_municipios:id_municipios,
      }),
    });

    const respuesta = await response?.json();
    if (respuesta.mensaje === "Creado satisfactoriamente") {
      mostrarempleados();
      setId_empleado("");
      setCi("");
      setApellidos("");
      setCorreo("");
      setDireccion("");
      setFoto("");
      setGenero("");
      setNombres("");
      setTelefono("");
      setTelf_movil("");
    }
  };

  async function mostrarroles() {
    const response = await fetch("http://127.0.0.1:8000/api/Roles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setId_roles(respuesta);
  }

  async function mostrarespecializaciones() {
    const response = await fetch("http://127.0.0.1:8000/api/Especializaciones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setId_especializaciones(respuesta);
  }

  async function mostrarDepartamentos() {
    const response = await fetch("http://127.0.0.1:8000/api/Departamentos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setId_departamentos(respuesta);
  }

  async function mostrarMunicipios() {
    const response = await fetch("http://127.0.0.1:8000/api/Municipios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setId_municipios(respuesta);
  }

  useEffect(() => {
    mostrarDepartamentos();
    mostrarMunicipios();
    mostrarempleados();
    mostrarespecializaciones();
    mostrarroles();
  }, []);

  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="">Departamento</label>
            <select
              value={id_departamentos}
              onChange={(e) => setId_departamentos(e.target.value)} >
              {id_departamentos.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Municipio</label>
            <select
              value={id_municipios}
              onChange={(e) => setId_municipios(e.target.value)} >
              {id_municipios.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Especialización</label>
            <select
              value={id_especializaciones}
              onChange={(e) => setId_especializaciones(e.target.value)} >
              {id_especializaciones.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Roles</label>
            <select
              value={id_roles}
              onChange={(e) => setId_roles(e.target.value)} >
              {id_roles.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">ci</label>
            <Input
              type="number"
              value={ci}
              onChange={(e) => setCi(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">nombres</label>
            <Input
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">apellidos</label>
            <Input
              type="text"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">género</label>
            <Input
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">foto</label>
            <Input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">dirección</label>
            <Input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">teléfono</label>
            <Input
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">teléfono móvil</label>
            <Input
              type="number"
              value={telf_movil}
              onChange={(e) => setTelf_movil(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">correo</label>
            <Input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>
        <Botonagregar onClick={enviar}>Agregar</Botonagregar>
      </form>
    </div>
  )
}

export default Formempleado

 export const Input = styled.input`
  margin: 5px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  height: 30px;
  outline: none;
`;

 export const Botonagregar = styled.button`
  margin-top: 40px;
  width: 100%;
  color: white;
  background: #2a9d8f;
  border: none;
  height: 40px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


import React, { useState, useEffect } from 'react';
import { Input,Botonagregar } from './Formempleado';

const Formpropietariomascotas = ({mostrarpropietariomascotas}) => {

    const [id_propietario, setId_propietario] = useState("");
    const [ci, setCi] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [genero, setGenero] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [telf_movil, setTelf_movil] = useState("");
    const [correo, setCorreo] = useState("");
    
  

    const enviar = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://127.0.0.1:8000/api/Propietario_mascotas", {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            id_propietario: id_propietario,
            ci: ci,
            nombres: nombres,
            apellidos: apellidos,
            genero: genero,
            direccion: direccion,
            telefono: telefono,
            telf_movil: telf_movil,
            correo:correo,
          }),
        });
    
        const respuesta = await response?.json();
        if (respuesta.mensaje === "Creado satisfactoriamente") {
          mostrarempleados();
          setId_propietariopropietario("");
          setCi("");
          setApellidos("");
          setCorreo("");
          setDireccion("");
          setGenero("");
          setNombres("");
          setTelefono("");
          setTelf_movil("");
        }
      };
  return (
    <div>
    <form>
      <div>
       
    
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

export default Formpropietariomascotas
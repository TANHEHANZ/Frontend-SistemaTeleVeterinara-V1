import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
  return (
    <Divheader>
      <nav>
        <div>
          <img
            src="https://t1.ea.ltmcdn.com/es/posts/5/5/2/12_razas_de_gatos_finos_24255_orig.jpg"
            alt="img"
          />
        </div>
        <section>
          <img src="src/icons/hogar.png" alt="img" />
          <Linkes to="/">Inicio</Linkes>
        </section>
        <section>
          <img src="src/icons/mascota.png" alt="img" />
          <Linkes to="/Mascotas">Mascotas</Linkes>
        </section>
        <section>
          <img src="src/icons/mascota.png" alt="img" />
          <Linkes to="/Empleados">Empleados</Linkes>
        </section>
        <section>
          <img src="src/icons/emprendedor.png" alt="img" />
          <Linkes to="/Propietariomascotas">Propietario Mascotas</Linkes>
        </section>
        <section>
          <img src="src/icons/veterinario.png" alt="img" />
          <Linkes to="/">Veterinarios</Linkes>
        </section>
        <section>
          <img src="src/icons/revista.png" alt="img" />
          <Linkes to="/">visitas</Linkes>
        </section>
        <section>
          <img src="src/icons/veterinario.png" alt="img" />
          <Linkes to="/">Especializaciones</Linkes>
        </section>
        <section>
          <img src="src/icons/mascota.png" alt="img" />

          <Linkes to="/">Estado mascotas</Linkes>
        </section>
        <section>
          <img src="src/icons/familia.png" alt="img" />
          <Linkes to="/">Familia mascotas</Linkes>
        </section>
        <section>
          <img src="src/icons/mascota.png" alt="img" />

          <Linkes to="/">Genero Mascotas</Linkes>
        </section>

        <section>
          <img src="src/icons/municipalidad.png" alt="img" />
          <Linkes to="/">Municipios</Linkes>
        </section>
        <section>
          <img src="src/icons/gestion-de-equipos.png" alt="img" />
          <Linkes to="/">Genero Roles</Linkes>
        </section>
        <section>
          <img src="src/icons/mascota.png" alt="img" />

          <Linkes to="/">Tipo Salida mascotas</Linkes>
        </section>
      </nav>
      <article>
        <body>
          <Outlet />
        </body>
      </article>
    </Divheader>
  );
};
export default Nav;

const Divheader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
& > article{
    & > body {
    width: calc(100vw - 300px);
  }
}
  & nav {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #225859;
  border-radius: 0 2em 2em 0;

    gap: 1.5em;
    /* overflow-y:scroll; */
    & > div {
      width: 100%;
      height: 10em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2em;
      & > img {
        width: 8em;
        height: 8em;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    & section {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5em;
      margin-left: 2.5em;
      width: 80%;
      & > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        background-color: #fff;
        padding: 0.3em;
      }
    }
  }
`;

const Linkes = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.1em;
  font-weight: 500;
`;

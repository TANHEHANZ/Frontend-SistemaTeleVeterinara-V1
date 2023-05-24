//rafce

import React from 'react'
import styled from "styled-components";
import { useModalContext } from './context/modalContext';

const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();

  if(openModal) return (
    <DivModalContainer>
      <DivAtras onClick={() => setOpenModal(false)}></DivAtras>
      <DivChildContainer>
        <DivCabecera>
          <PTitulo>{titulo}</PTitulo>
          <Botoncerrar onClick={() => setOpenModal(false)}>X</Botoncerrar>
        </DivCabecera>
        <DivBody>{contenido}</DivBody>
      </DivChildContainer>
    </DivModalContainer>
  );
};

export default Modal;
const Botoncerrar=styled.button`
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 20px;
  color:white;
  background: #E76F51;

  
`;
const DivModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  
  
`;

const DivAtras = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  animation-name: transitionBackground;
  animation-duration: 1s;
  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const DivChildContainer = styled.div`
  z-index: 1;
  border-radius: 16px;
  min-width: 400px;
  background-color: white;
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
  box-shadow: 10px 10px 10px  rgba(0,0,0,.1),           
              inset 10px 10px 10px  rgba(0,0,0,.1)   ;

  @keyframes move {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const PTitulo = styled.p`
  font-weight: 600;
  font-size: 20px;
  display:flex;
  color: rgba(0, 0, 0, 0.5);
`;

const DivCabecera = styled.div`
  width: 100%;
  padding: 10px 26px;
  border-bottom: 1px solid #d9d9d9;
  display: flex ;
  justify-content: space-between;
  align-items: center;
`;

const DivBody = styled.div`
  padding: 26px;

`;
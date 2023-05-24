import React from 'react'
import styled from "styled-components";

function Inicio() {
  return (
    <Padre>
    <section>
        <input type="text" />
    <h1>Datos</h1>
<div>
    <Car></Car>
    <Car></Car>
    <Car></Car>
    <Car></Car>
</div>
<article>
    reportes graficos
</article>
    </section>

<article>
asas
</article>
    </Padre>
  )
}

export default Inicio

const Padre = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
& div {
    width:100%;
    height:10em;
    display:flex;
    flex-direction:row;
    gap:1.5em;
    justify-content:center;
    align-items:center;
}
& > section {
    width:63%;
display:flex;
flex-direction:column;
padding:1em;
align-items:center;

    & input{
        width:70%;
        height:2.5em;
border-radius:1em;
border:solid 1px #0002;
    }
    & > article{
        width:100%;
        height:15em;
        background-color:#6a5e46;
        color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
    }
}
& > article{
    margin:0 auto ;
    width:30%;
    background-color:#ecf9ff;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
const Car = styled.section`
width:calc(80% / 4);
height:7em;
background-color:#49a3ca;
border-radius:1em;
color:#fff;
&:nth-child(1){
    background-color:#225859;
}
&:nth-child(2){
background-color:#2e7662;   
}
&:nth-child(3){
background-color:#11695e;   
}
&:nth-child(4){
background-color:#215f5d; 
}
`;


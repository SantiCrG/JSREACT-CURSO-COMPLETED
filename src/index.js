import React from "react";
import ReactDOM  from "react-dom/client";


import {Botones} from "./Costeño"

import {Target} from "./Tarjeta"
import {Numbertwo} from "./Otarjeta"

//estilos dependiendo el booleano
import {Condicion} from "./Ifcss"

//componente con class
import {Sena} from "./Class"

// como obtener datos 
import {Post} from "./Posts"


const root = ReactDOM.createRoot(document.getElementById("root")) ;

// la funcion siempre tiene que tener la inicial en mayuscula


function Add(pa, ma){
    return pa + ma 
}

console.log(Add(1,4))

// otra manera de hacer una funcion 
const handleChange = (e) => {
    console.log(e.target.value)
}




// Propiedades
function Japon({name,Apellido,EsCivil,Ubicacion,Sueldo,Empresa}){

    const musashi = ({name,Apellido,EsCivil,Ubicacion,Sueldo,Empresa})

    return <div>
        <h1>Nombre de Usuario: {name} {Apellido}</h1>
        <hr></hr>
        {/* Acordemonos que ? es if y : es else */}
     <p>Estado Civil: {EsCivil ? "No esta casado" : "Si esta casado"}</p>
     <li>{Ubicacion.Ciudad}</li>
     <li>{Ubicacion.Localidad}</li>
     <p>Sueldo: {Sueldo}</p>
     <p>Empresa: <b>{Empresa}</b></p>
     <hr></hr>

    </div>
}

root.render(<>
    <Japon name={"Santiago"}
    Apellido={"Ceron Garcia"}
    EsCivil={true}
    Ubicacion={{ 
        Ciudad : "Bogota", 
        Localidad : "Suba",   
    }}
    Sueldo={1800000}
    Empresa={"RCN"}
    />
    <Botones name="Comprar"/>
    <Botones name="Cancelar"/>

    <Target></Target>

    <Numbertwo></Numbertwo>

    <Condicion Parce={true} />

    <Sena></Sena>
    
    <input id="Ceron" onChange={handleChange}></input>
    
    <Post/>
</>)
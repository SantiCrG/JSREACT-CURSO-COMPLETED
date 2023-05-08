import React from "react";
import ReactDOM  from "react-dom/client";

//Componente de botones 
import {Botones} from "./Costeño"

//Componente para ver tarjeta con css
import {Target} from "./Tarjeta"
import {Numbertwo} from "./Otarjeta"

//estilos dependiendo el booleano
import {Condicion} from "./Ifcss"

//componente con class
import {Sena} from "./Class"

//Componente de HOOKS
import {Counter, Kaic, Message} from "./Uses"

// como obtener datos 
import {Post} from "./Posts"

// HOOK useState Importada
import {useState} from "react";



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

//ARRAYS - OBJETOS
// SE ABRE EL OBJETO Y DENTRO DE LAS LLAVES INGRESAMOS LOS DATOS DIFERENTES
const users = [
    {
        id : 1 ,
        Name: "Santiago",
        Lastname : "Ceron",
        image : "https://robohash.org/200",
    },
    {
        id : 2 ,
        Name: "Daniel",
        Lastname : "Garcia",
        image : "https://robohash.org/205"
    }
]


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

{/* Abrimos llaves para intrepretar codigo
- LLamamos el objeto users y de arreglo utlizamos la funcion map
 - de cada user que este retornando => 
- vamos a retornar un h2 y llamamos de la propiedad user llamamos a el Name de la persona 
- utilizar user y utiliza id 
- le asignamos un key el cual va concatenar un id a nuestros valores dependiendo el recorrido de nuestro objetos
- El key lo debe tener la etiqueta que va a tener adentro todos los valores

*/}
{users.map((user, id) => {
    return <div key={id}>
        <h2 style={{background : "black" , color : "white"}}>{user.Name}</h2>
        <h5>{user.Lastname}</h5>
        <img src={user.image} style={{width : "15%"}}></img>
    </div>

})}

<Counter/>

<Kaic></Kaic>
<hr></hr>
<Message></Message>

</>)


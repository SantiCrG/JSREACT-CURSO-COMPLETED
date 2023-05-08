import {useState} from "react";

export function Counter(){
    {/* Usamos el usestate dentro de nuestra funcion 
    - guardamos en una viarable en el que desde useState vamos a extraer el primer valor llamado Counter
    - Luego llamamos una funcion en este caso casita
    - en useState le decimos que empieze en 0 esto es igual a decir var state = 0
    */}
        const [Counter, casita] = useState("Haga click para revelar el valor")
    
        return <div style={{padding: "5%", background: "blue" , color : "white"}}>
            <h1>Counter: {Counter}</h1>
    <button onClick={function() {
        {/* Le decimos que al dar click el valor va ser 100 */}
        casita("El valor es:" + "  "+  100)
    }}>
        Ver valor
    </button>
    
        </div>
    }
    
    
    export function Kaic(){
    
        const [Santiago, ryze] = useState(0)
    
        return <div style={{padding : "5%", background: "red"}}>
            <h1 style={{color : "white" }}>Suma de a un numero : {Santiago} </h1>
            <button onClick={function(){
                ryze(Santiago + 1)
            }}> Añadir un numero</button> 
            <button onClick={function(){
                ryze(Santiago - 1)
            }}> Restar un numero</button> 
            <button onClick={function(){
                ryze(0)
            }}> Reestablecer</button> 
    
        
        </div>
    
    }
    
    export function Message(){
        const [Mensaje, SaveMensaje] = useState(" ")
    
        return <div>
            <input onChange={ e => SaveMensaje(e.target.value)}>
            </input>
    <button onClick={function() {
        alert("El mensaje es:" + "  " + Mensaje)
    }}>
        Guardar Mensaje
    </button>
        </div>
    }
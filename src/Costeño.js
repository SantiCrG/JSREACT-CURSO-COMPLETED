
import "./Estilos.css"

export function Botones({name}){

    const burra = (name)

    return <button className="Botones" onClick={function(){console
    .log("Hola Parce")}}>
        {name}
    </button>

}

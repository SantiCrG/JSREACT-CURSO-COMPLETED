import "./Estilos.css"

export function Condicion({Parce}){
    return <div >
        <h1>ELECCION DE BOLLEANO</h1>
    <span className={Parce ? "bg-Green" : "bg-Blue" }>
    {Parce ? "Santiago Es malvado" : "Santiago es buena persona"}
    </span>
    </div>
}
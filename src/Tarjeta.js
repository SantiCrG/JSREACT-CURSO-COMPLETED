//VAMOS A VER COMO DARLE ESTILO EN JS

// ponemos dentro de la etiqueta la propiedad style 
// PONEMOS EN EL DIV LAS LLAVES PARA MOSTRAR CODIGO
// Y DENTRO las llaves de OBJETO PARA COLOCAR PROPIEDADES SIMILAR A LAS REGLAS DE CSS

export function Target(){
        // otra manera de dar estilos es desde una constante
    const Titulo = { fontWeigth: "lighter" , color : "red"}
    const Pe = { color : "green"}

    return <div style={{background: "black", color:"white", textAlign: "center", padding: "15px"}}>
        <h1 style={Titulo} > Mi primer Trabajo </h1>
        <p style={Pe}>Desarrollador de software</p>
    </div>
}
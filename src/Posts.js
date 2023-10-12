import {VscGithub} from "react-icons/vsc";


// Traer datos

// fetch nos permite traer datos

//PROMESAS EN JAVASCRIPT
export function Post(){
    return <button onClick={function(){ 
        /* MIENTRAS SOLICITAS LOS DATOS*/
        fetch("https://jsonplaceholder.typicode.com/posts")
        /* SOLICITA LA RESPUESTA Y CONVIERTE LA RESPUESTA EN UN JSON*/
        .then(response => response.json())
        /* LUEGO MUESTRAME LOS DATOS EN UNA CONSOLA*/
        .then(Data => console.log(Data))
        /*Y SI HAY UN ERROR MUESTRAME EL ERROR EN CONSOLA */
            .catch(error => console.error(error))
     
    }}>
        <VscGithub/>
        Obtener Datos
        </button>
}
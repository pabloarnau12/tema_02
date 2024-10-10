/* eslint-disable react/prop-types */


import './App.css';
import Gallery from './estado';
import EstadoInstantanea from "./estadoComoInstantanea.jsx";

function App() {
  
  

  return (
    <>
      {/**<AlertButton mensaje={"Reproduciendo pelicula"}>
        Reproducir pelicula
        </AlertButton>
        <AlertButton mensaje={"Subiendo imagen"}>
        Subir imagen
        </AlertButton>
        <Alert2Btn nombre={"Deadpool"}></Alert2Btn>
      
        <ComprobarPropagacion></ComprobarPropagacion>
        <Toolbar></Toolbar>
        <Formulario></Formulario>
        */}
        <Gallery></Gallery>
        <Gallery></Gallery>
        <EstadoInstantanea></EstadoInstantanea>
    </>
  )
}


/**  function AlertButton({mensaje, children}){
  return(
    <button onClick={() => alert(mensaje)}>
      {children}
    </button>
  )
}
 */
function Button({onClick, children}){
  return(
    <button onClick={onClick}>
      {children}
    </button>

  );
}

/**   function Alert2Btn({nombre}){
  function handleClick(){
    alert ("Reproduciendo la pelicula " +  nombre)
  }
  return(
    <Button onClick={handleClick}>
      Reproduciendo {nombre} 
    </Button>
  );
}*/
function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Reproducir película
      </Button>
      <Button onClick={onUploadImage}>
        Subir imagen
      </Button>
    </div>
  );
}

function Formulario() {
  return (
    
    <form
    onSubmit={
     
      (e) => {
         {/**evita que se recargue la pagina al pulsar el boton */}
        e.preventDefault();
    alert('¡Enviado!');
    }}
    >
      <input></input>
      <button>Guardar</button>
    </form>
  );
}

function ComprobarPropagacion(){
  function click() {
    alert("Has pulsado el boton 1")
  }
  
  return(
    <div 
    onClick={() =>alert("Has pulsado el contenedor")}
    > 
      <button
       onClick={(e) =>{e.stopPropagation();("Has pulsado el boton 1")}}>
        Boton 1
        </button>
      <button onClick={() =>alert("Has pulsado el boton 2")}>Boton 2</button>
      </div>
  )
}


export default App

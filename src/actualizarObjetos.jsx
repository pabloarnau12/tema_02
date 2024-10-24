import { useState } from "react"
import "./actualizarObjetos.css"
export default function ActObjetos(){

    const[persona, setpersona] = useState({
        nombre: "asdf", 
        apellidos: "adf", 
        email: "asdf",
        datosContacto:{
            email: "julenalonso123@pepe",
            telefono: 646698346
        }

    }
    )


        const handleNombreChange = (e) => {


            setpersona({
                ...persona,
                nombre: e.target.value
            });
        };

        const handleApellidosChange = (e) => {
            setpersona({
                ...persona,
                apellidos: e.target.value
            });
        };

        const handleEmailChange = (e) => {
            setpersona({
                ...persona,
                datosContacto:{
                    ...persona.datosContacto,
                    email: e.target.value
                }
            });
        };

        const handleTelefonoChange = (e) => {
            setpersona({
                ...persona,
                datosContacto:{
                    ...persona.datosContacto,
                    telefono: e.target.value
                }
            });
        };

    return (        
    <>
        <form>
            <label>
                Nombre:
                <input value={persona.nombre} onChange={handleNombreChange}></input>
            </label>
            <label>
                Apellidos:
                <input> value={persona.apellidos}{handleApellidosChange}</input>
            </label>
            <label>
                Correo electrónico:
                <input> value={persona.email} {handleEmailChange}</input>
            </label>

            <p>Datos personales: {persona.nombre} {persona.apellidos} {persona.email}</p>

        </form>
    </>
    )

}
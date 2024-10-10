import { sculptureList } from './data.js';
import { useState } from 'react';

export default function Gallery() {

    //palabra reservada const [NombreVariable, metodo para actualizar el valor] =
    //metodo useState(valor inicial de la variable)
    //useState -> Es lo que me permite cambiar el valor y que
    //react vuelva a renderizar el componente
    const [index, setIndex] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    let final = false;

    function handleNextClick() {
        if (index === sculptureList.length - 1) {
            final = true
        } else {
            setIndex(index + 1);


        }

        function handleMostrar() {
            setMostrar(!mostrar)
        }

        let sculpture = sculptureList[index];
        return (
            <>

                <button
                    onClick={handleNextClick}
                    disabled={!final}>
                    Siguiente
                </button>
                <h2>
                    <i>{sculpture.name} </i>
                    por {sculpture.artist}
                </h2>
                <h3>
                    ({index + 1} de {sculptureList.length})
                </h3>
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                />
                <br></br>
                <button onClick={handleMostrar}>Mostrar</button>
                {mostrar && <p>{sculpture.description}</p>}

            </>
        );
    }
}
import {useState} from "react";

export default function EstadoInstantanea(){
    const [isSent, setIsSent] = useState(false)
    const [mensage,setMensage] = useState('Hola')

    if(isSent){
        return (
            <>
            <h1>Mensaje enviado</h1>
            </>
        )
    }

    return(
        <>
            <form
            onSubmit={
                (e) =>{
                    e.preventDefault()
                    setIsSent(true)
                    alert(mensage)
                }
            }>
                <textarea
                placeholder="Mensaje"
                value={mensage}
                onChange={e =>setMensage(e.target.value)}
                ></textarea>
                <button type="submit">Enviar</button>

            </form>
            <Contador></Contador>
        </>
    )
}


function Contador(){
    const[number, setNumber] = useState(0);

    return(<>
        <h1>{number}</h1>
        <button
            onClick={() =>{
                setNumber((number) =>number +1)
                setNumber((number) =>number +1)
                setNumber((number) =>number +1)

            }}

        >+3</button>
        </>)
}
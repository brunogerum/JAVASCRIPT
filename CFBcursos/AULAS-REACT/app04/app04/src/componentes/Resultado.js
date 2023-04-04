import React from "react";


export default function Resultado(props){
    return(
        <div>
            <p>Soma das Notas: {props.somaNotas}</p>
            <p>{props.somaNotas >= 60 ?"Aprovado":"Reprovado"}</p>
        </div>
    )
}
import React from "react";
import Globais from "./Globais";

export default function Info(){

    return(
        <>
            <p>{'Canal: '+ Globais.canal}</p>
            <p>{'Curso: '+ Globais.curso}</p>
            <p>{'nome: '+ Globais.nome}</p>
            <hr/>
  
        </>
    )
}
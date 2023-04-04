import React from "react";

export default function Caixa(props){
    return(
        <>
         <h1>BRUNO</h1>
         <p>{props.site}</p>
         {props.children}
         {props.children[0]}
        </>
    )
}
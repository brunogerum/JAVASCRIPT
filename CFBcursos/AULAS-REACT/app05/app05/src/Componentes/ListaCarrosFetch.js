import React,{useEffect,useState} from "react";

export default function ListaCarros(){

     const [carros,setCarros] = useState  ([])  
     //setcarros é a funcao  state que faz a atualização

     useEffect(()=>{

        fetch('https://apireactexemplo1.brunogerum.repl.co')
        .then((res)=>res.json())
        .then(
            (resultado)=>{
                setCarros(resultado)
            }
        )
        }
     )

       
    return(
        <div>
            {carros.map(
                carro=> <div key={carro.id}>{carro.id}-{carro.marca}-{carro.modelo}</div>
            )}
        </div>
    )
    
}
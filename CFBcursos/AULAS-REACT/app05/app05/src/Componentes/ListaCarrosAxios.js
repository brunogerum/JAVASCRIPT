import React,{useEffect,useState} from "react";
import axios from 'axios';

export default function ListaCarros(){

     const [carros,setCarros] = useState  ([])  

     useEffect(()=>{
       axios.get('https://apireactexemplo1.brunogerum.repl.co')
        .then(res=>{
            const dadosCarros=res.data
            setCarros(dadosCarros)
        }) 
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
import React from 'react'
import './App.css'
import ledVerde from'./componentes/imgs/led_verde.png'
import ledVermelho from'./componentes/imgs/led_vermelho.png'

export default function Led(props) {

    return (
        <>
            <img style={{width:'50px'}} src={props.ligado?ledVerde:ledVermelho}></img>
            <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>
            <a
            href='https://www.google.com.br'
            target='_blank'
            onClick={(c)=>c.preventDefault()}
            >
                Google
            </a>
        </>
  );
}
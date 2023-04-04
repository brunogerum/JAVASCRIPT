import React,{useState} from 'react';
import './App.css';
import Canal from './componentes/Canal'
import Caixa from './componentes/Caixa';

export default function App() {
  
return(
  <>
    <Caixa site='www.google.com.br'>
      <h1> CFB CURSOS</h1>
      <p>Curso de React</p>
      <Canal/>
    </Caixa>
  </>
)
}



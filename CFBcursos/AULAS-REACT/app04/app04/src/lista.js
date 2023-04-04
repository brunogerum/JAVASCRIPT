import React,{useState} from 'react';
import './App.css';

export default function App() {

  const modelos=[
    {categoria: 'Esporte', preço: '110000.00', modelo: 'Golf GTI'},
    {categoria: 'Esporte', preço: '120000.00', modelo: 'Camaro'},
    {categoria: 'SUV', preço: '85000.00', modelo: 'HRV'},
    {categoria: 'SUV', preço: '83000.00', modelo: 'T-Cross'},
    {categoria: 'Utilitario', preço: '90000.00', modelo: 'Hillux'},
    {categoria: 'Utilitario', preço: '95000.00', modelo: 'Ranger'}
  ];

  const listaModelos=modelos.map(
    (m,i)=>
      <li key={i}><p>{i}--{m.categoria} - R${m.preço} - {m.modelo}</p></li>
    
  )




    
  const carros = ['HRV','Golf', 'Gol', 'Palio', 'Uno', 'Celta']

  const listaCarros=carros.map(
    (c,i)=>
      <li key={i}><p>{i}--{c}</p></li>
    
  )

  return (
    <>
    <ul>{listaCarros}</ul>
    <ul>{listaModelos}</ul>
    </>
  );
}


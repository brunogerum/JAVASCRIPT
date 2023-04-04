import React,{useState, useEffect} from 'react';
import './App.css';

export default function App() { 
  
  const [categoria,setCategoria]=useState('')

  const carros=[
    {categoria: 'Esporte', preço: '110000', modelo: 'Golf GTI'},
    {categoria: 'Esporte', preço: '120000', modelo: 'Parati'},
    {categoria: 'SUV', preço: '85000', modelo: 'HR-V'},
    {categoria: 'SUV', preço: '83000', modelo: 'T-cross'},
    {categoria: 'Utilitario', preço: '150000', modelo: 'Hillux'},
    {categoria: 'Utilitario', preço: '70000', modelo: 'Ranger'},
  ]
  //se vai interagir precisa usar o state

  const linhas=(cat)=>{
    const li=[]
    carros.forEach(
      (carro)=>{
        if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase() == ''){
          li.push(
            <tr>
              <td>{carro.categoria}</td>
              <td>{carro.preço}</td>
              <td>{carro.modelo}</td>
            </tr>
          )
        }
      }
    )
    return(
      li
    )
  }

  const tabelaCarros=(cat)=>{
    return(
    <table border='1' style={{borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {linhas(cat)}
        </tbody>
    </table>
    )
  }
 
 const pesquisaCategoria=(cat,scat)=>{
  return(
    <div>
      <label>Digite uma Categoria: </label>
      <input type='text' value = {cat} onChange={(e)=>scat(e.target.value)}/>
    </div>
  )
 }
return(
  <>
    {pesquisaCategoria(categoria,setCategoria)}
    {tabelaCarros(categoria)}

  </>
);
}



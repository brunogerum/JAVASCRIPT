import React, { useEffect, useState } from "react";

export default function App() {

  const [nro1,setNro1] = useState(0);
  const [nro2,setNro2] = useState(0);
  const [resultado,setResultado] = useState(0);
  const [operacao,setOperacao]= useState('Somar');

  const Calcular=() => {
    if (operacao=='Somar') {
      return (parseFloat(nro1) + parseFloat(nro2))
    } else if(operacao=='Subtrair') {
      return (parseFloat(nro1) - parseFloat(nro2))
    } else if (operacao=='Dividir') {
      return (parseFloat(nro1) / parseFloat(nro2))
    } else if (operacao=='Multiplicar') {
      return (parseFloat(nro1) * parseFloat(nro2))
    } else {
      return('err0')
    }//useeffect espera uma funcao 
 
  }   
  
  useEffect(()=>{
      setResultado(Calcular());
    },[nro1, nro2, operacao]);
 
  return (
    <div className="App">
      <h1>Calculadora React</h1>

      <p><label>Primeiro Nro: </label>
      <input type='number' value={nro1} onChange={(e)=>{setNro1(e.target.value)}}/></p>

      <p><label>Segundo Nro</label>
      <input type='number' value={nro2} onChange={(e)=>{setNro2(e.target.value)}}/></p>

      <p><select onChange={(e)=>{setOperacao(e.target.value)}}>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select></p>

      <p><label>Resultado: {resultado}</label></p>
    </div>
  );
}
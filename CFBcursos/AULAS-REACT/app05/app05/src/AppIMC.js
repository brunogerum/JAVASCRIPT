import React, {useState} from 'react';
import './App.css';
import IMC from './Componentes/IMC.js';
import Peso from './Componentes/Peso';
import Altura from './Componentes/Altura';
import Calcular from './Componentes/Calcular';
import Resultado from './Componentes/Resultado';


function App() {

  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)



  return (
  <>
    <Peso p={peso} sp={setPeso}/>
    <Altura a={altura} sa={setAltura} />
    <Calcular p={peso} a={altura} result={setResultado}/>
    <Resultado r={resultado}/>
    <IMC/>
  </>
  );
}

export default App;

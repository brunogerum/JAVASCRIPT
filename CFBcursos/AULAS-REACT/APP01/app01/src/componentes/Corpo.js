import React from 'react'
import Dados from './Dados'

export default function Corpo(){
    const cnl = () => {
        return ' CFB Cursos'
    }
    const yt= ' Youtube.com/cfbcursos'
    const crs = ' React'

    const somar=(v1,v2)=>{
        return v1+v2
    }
  
    return(
        <section>
            <h2>Bruno Marcelo Gerum</h2>
            <p>Maior torcedor do Coxa</p>
            <p>Coritiba Campeão em 1985</p>
            <Dados 
                canal={cnl} 
                youtube={yt}
                curso={crs}
                somar={somar}    
            />

        </section>
    )
}
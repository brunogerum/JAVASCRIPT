import React, { useState } from "react";

export default function Altura(props) {
    return(
        <div>
            <label> Informe seu peso: </label>
            <input type="number" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
        </div>
    )
}

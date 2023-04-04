import React, { useState } from "react";

export default function Peso(props) {
    return(
        <div>
            <label> Informe seu peso: </label>
            <input type="number" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
        </div>
    )
}



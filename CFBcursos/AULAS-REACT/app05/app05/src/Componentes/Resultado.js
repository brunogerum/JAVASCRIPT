import React, { useState } from "react";

export default function Resultado(props) {

    return (
        <div>
            <p>Resultado: {props.r.toFixed(2)}</p>   
        </div>
    )
}

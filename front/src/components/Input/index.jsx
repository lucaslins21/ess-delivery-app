import React from "react";
import './style.css';

export const Input = (props) => {
    return (
        <div className="ContainerInput">
            <h1 className="titulo">{props.titulo}</h1>
            <input 
                style={{width: props.width}}
                placeholder={props?.placeholder}
                value={props?.value}
                onChange={props?.onChange}
            >{props?.text}</input>
       </div>
    )
}
import React, { useState } from "react";
import './button2.css';

function Assistido(props) {
    return (
     <button>
        {
            props.assistido ? "Assistir Novamente": "Assistir"
        }
     </button> 
     
    );
  }
  
  export default Assistido;
import './assistido.css';

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
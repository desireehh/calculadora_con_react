import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react';
import {evaluate, or} from 'mathjs';

function App() {
  const [input, setInput]= useState(0);
  const agregarInput=(valor)=>{
    if(input===0) {
      setInput(valor)
       }
  else{
    setInput(input+valor)}
  }

  const mostrarResultado =()=>{
    if(input){
      setInput(evaluate(input));
     
      
    }else{setInput(0)
    }
    
  
    
  }

  const borrarInput=(valor)=>{
    setInput(0)
  }

    return (
    <div className='App'>
      <div className= 'freeCodeCampLogo-contenedor'>
        
        <img
          src={freeCodeCampLogo}
          alt= 'logo de freeCodeCamp'
          className='freeCodeCamp-logo'
        />

      </div>

      <div className='calculadora-contenedor'>
          <div>
          <Pantalla input={input} />

             </div>

            
        
        <div className= 'fila'> 
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className= 'fila'>  
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>       
        </div>

        <div className= 'fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className= 'fila'> 
         
          <Boton manejarClic={mostrarResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className= 'fila'>
          <BotonClear 
          manejarClear= {borrarInput}
                    />
         
        </div>



      </div>
      
    </div>
  );
}

export default App;

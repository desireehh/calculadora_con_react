import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import Boton from './componentes/Boton'

function App() {
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
        <div className= 'fila'> 
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>x</Boton>
        </div>

        <div className= 'fila'>  
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>       
        </div>

        <div className= 'fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>

        <div className= 'fila'> 
         
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
        </div>

        <div className= 'fila'></div>



      </div>
      
    </div>
  );
}

export default App;

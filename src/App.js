import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CardGroup } from 'react-bootstrap';

import React, { useState }  from "react";
import TarjetaComonent from "./Components/TarjetaComponent";
import datos from './Data/Datos';
import ContadorComponent from './Components/ContadorComponent';

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const disminuir = () => {
    setContador(contador - 1);
  }

  const reset = () => {
    setContador(0);
  }
  

  return (
    <div className="App">
      <CardGroup>
        {datos.map((e, i) => (
          <TarjetaComonent Titulo={e.Titulo} Cuerpo={e.Cuerpo} img={e.img} contador={contador} />
        ))}
      </CardGroup>

      <ContadorComponent incrementar={incrementar} disminuir={disminuir} reset={reset} contador={contador}/>

    </div>
  );
}

export default App;

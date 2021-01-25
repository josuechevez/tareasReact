import React, {useState} from 'react';
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {

  const [nuevo_obj, guardarNuevo_obj] = useState(false);

  return (
       <div className="d-flex flex-row bd-highlight mb-3 flex-wrap">
              <div className="p-2 flex-grow-1 bd-highlight w-100">
                <h1 className="text-center p-5 display-1">Tasks React.JS</h1>
              </div>
              <div className="p-5 bd-highlight-1 w-100">
                <Formulario
                  guardarNuevo_obj = {guardarNuevo_obj}
                />
              </div>
              <div className="p-5 bd-highlight ">
                <Lista 
                  nuevo_obj = {nuevo_obj}
                />
              </div>
       </div>
  )
}

export default App;

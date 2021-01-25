import React, {useState} from 'react';
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {

  const [nuevo_obj, guardarNuevo_obj] = useState(false);

  return (
       <div className="d-flex flex-row bd-highlight mb-3 flex-wrap w-100">
              <div className="p-2 bd-highlight w-100">
                <h1 className="text-center p-5 display-1">Tasks React.JS</h1>
              </div>
              <div className="p-4 bd-highlight w-50">
                <Formulario
                  guardarNuevo_obj = {guardarNuevo_obj}
                />
              </div>
              <div className="p-4 bd-highlight w-50 ">
                <Lista 
                  nuevo_obj = {nuevo_obj}
                />
              </div>
       </div>
  )
}

export default App;

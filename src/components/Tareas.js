import React, {useState} from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import PropTypes from 'prop-types';

const api = process.env.REACT_APP_API;

const Tarea = ({ tarea, activarMostrar}) => {

    const [ID, guardarID] = useState(0)
    

    const eliminar = async e =>{
        e.preventDefault(); 
        
        const res = await fetch(`${api}/tasks/${ID}`,{
            method:'DELETE',
            
        });

        let data =  await res.json();

        console.log(data);

        
        if(Object.entries(data).length === 0){
            
            Swal.fire(
                'Alerta',
                'La tarea no se pudo registrar',
                'question'
            );
        }else{
            activarMostrar(true);
            Swal.fire(
                'Alerta',
                'La tarea se elimino correctamente',
                'success'
            );
        }
    }

    

    return (
        <div className="card border-secondary mb-3 m-1 w-75">
            <div className="card-header">React Task</div>
            <div className="card-body text-secondary">
                <h5 className="card-title">{tarea.title}</h5>
                <p className="card-text">{tarea.description}</p>
               <form 
                    onSubmit={eliminar}
               >
                    <button 
                        type="submit"
                        className="btn btn-warning"
                        name= "id"
                        value={tarea.id}
                        onClick={e => guardarID(tarea.id)}
                    >Eliminar</button>
               </form>
            </div>
        </div>
    );
}

Tarea.protoType={
    tarea: PropTypes.array.isRequired,
    activarMostrar: PropTypes.func.isRequired
}

export default Tarea;
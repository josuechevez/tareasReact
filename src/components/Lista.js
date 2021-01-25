import React,{ useEffect, useState,Fragment } from "react";
import Tarea from './Tareas';
import PropTypes from 'prop-types';

const api = process.env.REACT_APP_API;

const Lista = ({nuevo_obj}) =>{

    const [tareas, guardarTareas] = useState([]);

    const [mostrar, activarMostrar] = useState(true);


    const get_tasks = async () =>{

        const res = await fetch(`${api}/tasks`);
        const data = await res.json();
        //console.log(data);
        guardarTareas(data);
       
    }

    useEffect(() => {
      
       if(mostrar === true || nuevo_obj === false){
            get_tasks();
            activarMostrar(false);
            return

       }else if(mostrar === false || nuevo_obj === true){
            get_tasks();
       }
    }, [mostrar,nuevo_obj])


    return(

      <Fragment>
            <div className="d-flex flex-row bd-highlight mb-3 w-100 flex-wrap">
            {
                tareas.map(tarea =>(
                    <Tarea
                            key={tarea.id}
                            tarea = {tarea}
                            activarMostrar = {activarMostrar}
                    />
                ))
            }
            </div>
      </Fragment>
      
    );
}
Lista.protoType={
    nuevo_obj: PropTypes.func.isRequired
}
export default Lista;
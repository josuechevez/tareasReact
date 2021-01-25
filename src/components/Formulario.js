import React, {useState} from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Error from './Error';
import PropTypes from 'prop-types';

const api = process.env.REACT_APP_API;

const Formulario = ({guardarNuevo_obj})=>{

    //State-titel
    const [ title, guardarTitle ] = useState('');
    //State-description
    const [ description, guardarDescription] = useState('');
    //State-error
    const [ error, guardarError ] = useState(false);
    

    //obtener datos
    const get_value_form = async e =>{
        e.preventDefault();

        //validacion
        if(title.length === 0 || description.length === 0 ){
            guardarError(true);
            return;
        }

        //Regresa al estado inicial
        guardarError(false);

        const res = await fetch(`${api}/tasks`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                id:0,
                title,
                description
            })
        });
        //console.log("Api:",api,"Consulta",res);

        const data = await res.json();

        if(Object.entries(data).length === 0){
            Swal.fire(
                'Alerta',
                'No se pudo realizar el registro',
                'question'
            );

        }else{
            guardarNuevo_obj(true);
            Swal.fire(
                'Alerta',
                'Realizar el registro',
                'success'
            );
        }

        //console.log('Respuesta',data);
        reset_value();
    }

    const reset_value = ()=>{
        guardarTitle('');
        guardarDescription('');
    }

    return(
         <form
             className="border"
             onSubmit={get_value_form}
         >
             <div className="mb-3 pt-4 ps-3 pe-3">
                 <h2 className="display-5">New Task</h2>
                 <hr className="border"/>
             </div>
             <div className="mb-3 p-3 pe-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                 <input type="text"
                        className="form-control"
                        onChange={e => guardarTitle(e.target.value)}
                        value={title}
                        placeholder="Ej: Create app react"/>
             </div>
             <div className="mb-3 p-2 ps-3 pe-3">
                 <label htmlFor="exampleFormControlTextarea1" className="form-label" row="15" >Description</label>
                 <textarea
                     className="form-control"
                     rows="3"
                     onChange={e => guardarDescription(e.target.value)}
                     value={description}
                 ></textarea>
             </div>
             <div className="mb-3 p-2 ps-3 pe-3">
                 <button type="submit" className="btn btn-outline-success">Create Task</button>
             </div>
             {
                error
                ?
                    <div className="mb-3 p-4 ps-3 pe-3">
                        <Error 
                            mensaje = {"Todos los campos son requeridos"}
                        />
                    </div>
                :
                null
             }
         </form>
    )
}

Formulario.protoType={
    guardarNuevo_obj: PropTypes.func.isRequired
}

export default Formulario;
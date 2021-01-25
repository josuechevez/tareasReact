import React from "react";

const Error = ({mensaje})=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show w-100" role="alert">
            <strong>{mensaje}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
export  default Error;
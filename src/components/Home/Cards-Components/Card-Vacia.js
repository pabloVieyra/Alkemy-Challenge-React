import React from "react";
import { Busqueda } from "./Busqueda"; 

export const CardVacia = () => {

  return (
    <div className="col">
      
        <div className="btn-container">
          <h5>Añadir a heroes</h5>
          <Busqueda />
        </div>
      
    </div>
  );
};

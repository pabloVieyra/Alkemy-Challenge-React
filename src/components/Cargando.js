import React from "react";

export const Cargando = () => {
  return (
    <div className="spinner mt-5 ">
      <div className="spinner-grow text-secundary" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
};

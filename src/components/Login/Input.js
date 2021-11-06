import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormBusqueda } from "../../hooks_Personalizados/UseFormBusqueda";
import { types } from "../../reducers/types";

export const Input = () => {
  const [values, handleInputChange] = useFormBusqueda();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values !== "") {
      try {
        const url = `https://superheroapi.com/api.php/2422309994580296/search/${values}`;
        const response = await fetch(url);
        const { results } = await response.json();
        const action = {
          type: types.search,
          payload: results,
        };
        dispatch(action);
      } catch (error) {
        Swal.fire({
          title: "Nombre equivocado",
          text: "No hay resultados de busqueda",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      }
    } else {
      Swal.fire({
        title: "La busqueda esta mal realizada",
        text: "El campo de nombre no puede estar vacío",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de heroe"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={values}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <div className="input-group-append"></div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

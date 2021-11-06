import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "reactstrap";
import { types } from "../../../reducers/types";
import Swal from "sweetalert2";

export const SecundaryCard = ({ hero }) => {
  const [tooltipAddOpen, setTooltipAddOpen] = useState(false);
  const toggleAdd = () => setTooltipAddOpen(!tooltipAddOpen);

  const dispatch = useDispatch();

  const { heroes, good, bad } = useSelector((state) => state.heroes);

  const alert = () => {
    Swal.fire({
      title: "Selección incorrecta",
      text: "No podes agregar mas de 3 en un mismo equipo",
      icon: "warning",
      confirmButtonText: "Cool",
    });
  };

  const handleSelect = (e) => {
    e.preventDefault();
    if (heroes.length < 6) {
      if (hero.biography.alignment === "good") {
        if (good.length < 3) {
          const action = {
            type: types.add,
            payload: hero,
          };
          dispatch(action);
        } else {
          alert();
        }
      } else if (hero.biography.alignment === "bad") {
        if (bad.length < 3) {
          const action = {
            type: types.add,
            payload: hero,
          };
          dispatch(action);
        } else {
          alert();
        }
      } else {
        const action = {
          type: types.add,
          payload: hero,
        };
        dispatch(action);
      }
    } else {
      Swal.fire({
        title: "Team Completo!",
        text: "No se puede agregar mas de 6 heroes",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div
      className={`card mb-3 animate__animated animate__fadeIn animate__slow ${
        hero.biography.alignment === `good`
          ? `good`
          : hero.biography.alignment === `bad`
          ? `bad`
          : ``
      }`}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={hero.image.url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{hero.name}</h5>
            <ul>
              <li>Combate: {hero.powerstats.combat}</li>
              <li>Durabilidad: {hero.powerstats.durability}</li>
              <li>Inteligencia: {hero.powerstats.intelligence}</li>
              <li>Poder: {hero.powerstats.power}</li>
              <li>Velocidad: {hero.powerstats.speed}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-container-mini-card">
        <button
          type="button"
          className="btn btn-primary btn-mini-card"
          style={{ textDecoration: "underline" }}
          id="TooltipAdd"
          onClick={handleSelect}
        >
          <i className="fas fa-plus"></i>
        </button>
        <Tooltip
          placement="top"
          isOpen={tooltipAddOpen}
          target="TooltipAdd"
          toggle={toggleAdd}
        >
          Añadir Heroe
        </Tooltip>
      </div>
    </div>
  );
};

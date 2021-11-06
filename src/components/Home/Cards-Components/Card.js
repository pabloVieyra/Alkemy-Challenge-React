import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Tooltip } from "reactstrap";
import { types } from "../../../reducers/types";

export const Card = ({ hero }) => {
  const [tooltipInfoOpen, setTooltipInfoOpen] = useState(false);
  const toggleInfo = () => setTooltipInfoOpen(!tooltipInfoOpen);
  const [tooltipDeleteOpen, setTooltipDeleteOpen] = useState(false);
  const toggleDelete = () => setTooltipDeleteOpen(!tooltipDeleteOpen);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    const action = {
      type: types.delete,
      payload: hero.id,
    };
    dispatch(action);
  };

  return (
    <div className="col animate__animated animate__fadeIn animate__slow">
      <div
        className={`card ms-0 ${
          hero.biography.alignment === `good`
            ? `good`
            : hero.biography.alignment === `bad`
            ? `bad`
            : ``
        }`}
      >
        <img src={hero.image.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <ul className="ps-0 list">
            <li>Combate: {hero.powerstats.combat}</li>
            <li>Durabilidad: {hero.powerstats.durability}</li>
            <li>Inteligencia: {hero.powerstats.intelligence}</li>
            <li>Poder: {hero.powerstats.power}</li>
            <li>Velocidad: {hero.powerstats.speed}</li>
          </ul>
          <NavLink
            className="btn btn-info btn-more-info"
            exact
            to={`/hero/${hero.id}`}
            style={{ textDecoration: "underline" }}
            id="TooltipInfo"
          >
            <i className="fas fa-plus"></i>
          </NavLink>
          <Tooltip
            placement="top"
            isOpen={tooltipInfoOpen}
            target="TooltipInfo"
            toggle={toggleInfo}
          >
            More info!
          </Tooltip>
          
          <button
            type="button"
            className="btn btn-danger btn-delete"
            style={{
              textDecoration: "underline",
            }}
            id="TooltipDelete"
            onClick={handleDelete}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <Tooltip
            placement="bottom"
            isOpen={tooltipDeleteOpen}
            target="TooltipDelete"
            toggle={toggleDelete}
          >
            Borrar Hero
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

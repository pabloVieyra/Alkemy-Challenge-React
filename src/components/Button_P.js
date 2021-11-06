import React from "react";
import { useDispatch } from "react-redux";
import { types } from "../reducers/types";

export const Button_P = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <>
      <button className="btn btn-danger btn-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </>
  );
};

import { types } from "./types";

export const BusquedaReducer = (state = "", action) => {
  switch (action.type) {
    case types.search:
      return action.payload;

    default:
      return state;
  }
};

import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { HeroesReducer } from "../reducers/HeroesReducer";
import { BusquedaReducer } from "../reducers/BusquedaReducer";

const reducers = combineReducers({
  auth: authReducer,
  heroes: HeroesReducer,
  search: BusquedaReducer ,
});

export const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

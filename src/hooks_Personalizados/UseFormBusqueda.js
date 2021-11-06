import { useState } from "react";

export const useFormBusqueda= (initialState = "") => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues(target.value);
  };

  return [values, handleInputChange, reset];
};

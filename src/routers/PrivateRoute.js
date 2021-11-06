import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  localStorage.setItem("lastPath", rest.location.pathname);
  const { auth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      component={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

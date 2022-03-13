import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { UseForm } from "../../hooks_Personalizados/UseForm";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import axios from "axios";
import { types } from "../../reducers/types";
import Card from '@mui/material/Card';


export const LoginScreen = () => {
  
  const [{ email, password }, handleInputChange, reset] = UseForm ();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_LOGIN_URL, {
        email,
        password,
      })
      .then((response) => {
        const { token } = response.data;
        const action = {
          type: types.login,
          payload: token,
        };
        dispatch(action);
        reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Mail o Contraseña erroneas",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <Card sx={{ fontSize: 20,width: '70%' , backgroundImage:'url(https://p4.wallpaperbetter.com/wallpaper/162/161/68/superman-dc-comics-minimalist-superman-logo-wallpaper-preview.jpg)',backgroundSize:'cover'} } >
    <div className="col-auto p-5 text-center" >
      <h2 style={{color:'white'}}>Iniciar sesión</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup style={{margin:"2%",textAlign:'left'}}>
          <Label for="exampleEmail" style={{color:'white'}}>Nombre de Usuario</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Alkemy@Gmail.com"
            onChange={handleInputChange}
            value={email}
          />
        </FormGroup>
        <FormGroup style={{margin:"2%",textAlign:'left'}}>
          <Label for="examplePassword" style={{color:'white'}}>Contraseña</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={handleInputChange}
            value={password}
          />
        </FormGroup>
        <button className="btn  "  style={{margin:"1%",color:'white',background:'#666666'}}>
          Ingresar
        </button>
        
      </Form>
    </div>
    </Card>
    </div>
  );
};

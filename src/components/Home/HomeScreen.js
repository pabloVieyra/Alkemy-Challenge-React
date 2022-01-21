import React from "react";
import { Button_P } from "../Button_P"; 
import { CardsCont } from "./Cards-Cont";

export const HomeScreen = () => {
  return (
    
    <div className="home-screen animate__animated animate__fadeIn animate__slow">
            
      <div className="jumbotron jumbotron-fluid mt-5">
      
        <div className="container">
        <Button_P />
          <h1 className="display-10">
            <b>Alkemy </b>
          </h1>
          <p >
            <b>Challenge Fronted React - Pablo Vieyra</b>
          </p>
        </div>
        <hr className="my-4" />
        <div className="container mt-1">
          <h1 className="display-5">
            <b>Heroes Team</b>
          </h1>
          <CardsCont />
        </div>
      </div>

    </div>
  );
};
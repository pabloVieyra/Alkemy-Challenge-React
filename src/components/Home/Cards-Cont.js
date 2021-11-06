import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Cards-Components/Card";
import { CardVacia } from "./Cards-Components/Card-Vacia"; 
import { Powerstats } from "./Cards-Components/Powerstats"; 


export const CardsCont = () => {
  const { heroes } = useSelector((state) => state.heroes);

  return (
    <>
      <div className="row row-cols-2 row-cols-md-6 g-4 mt-1">


        {heroes.length < 6 && <CardVacia  />}
       
        {heroes.map((hero) => (
          <Card key={hero.id} hero={hero} />
        ))}
      </div>
      {heroes.length > 0 && <Powerstats />}
    </>
  );
};

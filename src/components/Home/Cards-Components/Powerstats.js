import React from "react";
import { useSelector } from "react-redux";

export const Powerstats = () => {
  const { heroes } = useSelector((state) => state.heroes);

  const combat = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.combat);
  }, 0);

  const durability = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.durability);
  }, 0);

  const intelligence = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.intelligence);
  }, 0);

  const power = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.power);
  }, 0);

  const speed = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.speed);
  }, 0);

  const weight = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.appearance.weight[1]);
  }, 0);

  const aWeight = Math.floor(weight / heroes.length);

  const height = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.appearance.height[1]);
  }, 0);

  const aHeight = Math.floor(height / heroes.length);

  const stats = [
    { name: "Combate:", value: combat },
    { name: "Durabilidad:", value: durability },
    { name: "Inteligencia:", value: intelligence },
    { name: "Poder:", value: power },
    { name: "Velocidad:", value: speed },
  ];

  stats.sort((a, b) => {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="mt-3 pb-3">
      <h1 className="display-10">Promedio de Powerstats</h1>
      <ul className="powerstats">
        {stats.map((stat) => (
          <li key={stat.name}>
            {stat.name} {stat.value}
          </li>
        ))}
        <li>Peso Promedio: {aWeight} kg</li>
        <li>Altura media: {aHeight} cm</li>
      </ul>
    </div>
  );
};

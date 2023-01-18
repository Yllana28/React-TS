import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import Heros from "../models/superHeros";

type CardProps = {
  superHeros: Heros;
};

const Card: React.FC<CardProps> = ({ superHeros }) => {
  return (
    <Link className="card" to={`/heros/${superHeros.id}`}>
      <div>
        <h1>
          {superHeros.id}. {superHeros.name}, de son vrai nom {superHeros.civil}
          .
        </h1>
        <h2>
          Habite à {superHeros.ville} et est âgé de {superHeros.age}ans.
        </h2>
        <img src={superHeros.image} alt={superHeros.name} />
      </div>
    </Link>
  );
};

export default Card;

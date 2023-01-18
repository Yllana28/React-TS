import React, { useState, useEffect } from "react";
import SuperHeros from "../models/superHeros";
import Card from "../component/card";
import { useParams, useNavigate } from "react-router-dom";
import HeroServices from "../services/heroServices";

const HeroDetails: React.FC = () => {
  const [heroClicked, setHeroClicked] = useState<SuperHeros>();

  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      HeroServices.getHeroById(+id).then((data) => setHeroClicked(data));
    }
  }, [id]);

  const _navigate = useNavigate();

  function retour() {
    _navigate("/");
  }

  function Edit() {
    _navigate(`/edit/${id}`);
  }

  return (
    <>
      <button onClick={retour}>Retour à l'accueil</button>
      <button onClick={Edit}>Editer ce héros</button>
      {heroClicked ? (
        <Card superHeros={heroClicked} />
      ) : (
        <h1>Erreur : Hero not found</h1>
      )}
    </>
  );
};

export default HeroDetails;

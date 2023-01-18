import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HerosForm from "../component/HerosForm";
import Heros from "../models/superHeros";

const HeroEdit: React.FC = () => {
  const [hero, setHero] = useState<Heros>();

  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`http://localhost:3001/superHerosList/${id}`)
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, [id]);

  return (
    <main>
      {hero?.id ? (
        <>
          <h2>Editer : {hero.name} </h2>
          <HerosForm hero={hero} inputImage="non" image="oui" />
        </>
      ) : (
        <h2>Erreur, héros introuvable</h2>
      )}
    </main>
  );
};

export default HeroEdit;

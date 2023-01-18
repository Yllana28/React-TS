import React from "react";
import HerosForm from "../component/HerosForm";
import SuperHeros from "../models/superHeros";

const CreateHero: React.FC = () => {
  const newHero: SuperHeros = new SuperHeros();

  return (
    <>
      <HerosForm hero={newHero} inputImage="oui" image="non" />
    </>
  );
};

export default CreateHero;

import React from "react";
import { useState } from "react";

const Formulaire: React.FC = () => {
  const [nom, setNom] = useState<string>("Luke Skywalker");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const soumettre = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulaire envoyé\n Nom : " + nom);
  };

  return (
    // Formulaire controlé
    <form onSubmit={soumettre}>
      <label htmlFor="nom">Nom : </label>
      <input
        id="name"
        type="text"
        name="nom"
        value={nom}
        onChange={changeName}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default Formulaire;

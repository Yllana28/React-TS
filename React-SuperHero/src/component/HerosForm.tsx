import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heros from "../models/superHeros";
import HeroServices from "../services/heroServices";
import "../styles/herosForm.css";

type props = {
  hero: Heros;
  inputImage: string;
  image: string;
};

// Pour validation du formulaire
type champs = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

// Pour les champs du formulaire
type form = {
  name: champs;
  civil: champs;
  age: champs;
  ville: champs;
  image: champs;
};

const HerosForm: React.FC<props> = ({ hero, inputImage, image }) => {
  const [form, setForm] = useState<form>({
    name: {
      value: hero.name,
      isValid: true,
    },
    civil: {
      value: hero.civil,
      isValid: true,
    },
    age: {
      value: hero.age,
      isValid: true,
    },
    ville: {
      value: hero.ville,
      isValid: true,
    },
    image: {
      value: hero.image,
      isValid: true,
    },
  });

  const _navigate = useNavigate();

  const editHeros = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champs = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    hero.name = form.name.value;
    hero.age = form.age.value;
    hero.civil = form.civil.value;
    hero.ville = form.ville.value;
    if (hero.id) {
      HeroServices.updateHero(hero).then(() => _navigate(`/heros/${hero.id}`));
    } else {
      hero.image = form.image.value;
      HeroServices.createHero(hero).then(() => _navigate(`/`));
    }
  };

  function supprimer(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    HeroServices.deleteHero(hero.id!).then(() => _navigate("/"));
  }

  return (
    <form onSubmit={submit}>
      <div className="form">
        {image === "oui" ? (
          <img src={hero.image} alt={hero.name} />
        ) : (
          <h2>Créer un super héros</h2>
        )}

        <label htmlFor="name">Nom : </label>
        <input
          type="text"
          name="name"
          value={form.name.value}
          onChange={editHeros}
        />

        <label htmlFor="age">Age : </label>
        <input
          type="number"
          name="age"
          value={form.age.value}
          onChange={editHeros}
        />

        <label htmlFor="civil">Identité secrète : </label>
        <input
          type="text"
          name="civil"
          value={form.civil.value}
          onChange={editHeros}
        />

        <label htmlFor="ville">Ville : </label>
        <input
          type="text"
          name="ville"
          value={form.ville.value}
          onChange={editHeros}
        />

        {inputImage === "oui" && (
          <>
            <label htmlFor="image">Image : </label>
            <input
              type="text"
              name="image"
              value={form.image.value}
              onChange={editHeros}
            />
          </>
        )}

        <br />
        <input type="submit" value="Envoyer" />
      </div>
      <button onClick={supprimer}>Supprimer</button>
    </form>
  );
};

export default HerosForm;

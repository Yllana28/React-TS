import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Heros from "../models/superHeros";

// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// };

const GetById: React.FC = () => {
  const [Hero, setHero] = useState<Heros>();

  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`http://localhost:3001/superHerosList/${id}`)
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, [id]);

  return (
    <>
      <div key={Hero?.id}>
        id: {Hero?.id} - {Hero?.name} - {Hero?.civil}
      </div>
      <img src={Hero?.image} alt="" />
    </>
  );
};

export default GetById;

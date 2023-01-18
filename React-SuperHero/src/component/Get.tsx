import React from "react";
import { useState, useEffect } from "react";
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

const Get: React.FC = () => {
  const [Heros, setHeros] = useState<Heros[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/superHerosList")
      .then((res) => res.json())
      .then((data) => setHeros(data));
  }, []);

  return (
    <>
      {Heros.map((Hero) => {
        return (
          <>
            <div key={Hero.id}>
              {Hero.name} - {Hero.civil}
            </div>
            <img src={Hero?.image} alt="" />
          </>
        );
      })}
    </>
  );
};

export default Get;

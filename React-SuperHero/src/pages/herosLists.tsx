import React, { useEffect, useState } from "react";
import Card from "../component/card";
import SuperHeros from "../models/superHeros";
import "../styles/herosLists.css";
import HeroServices from "../services/heroServices";

const HerosLists: React.FC = () => {
  const [heroList, setHeroList] = useState<SuperHeros[]>([]);

  useEffect(() => {
    HeroServices.getHeroes().then((data) => setHeroList(data));
  }, []);

  return (
    <div className="heroList">
      {heroList.map((hero: SuperHeros) => {
        return <Card key={hero.id} superHeros={hero} />;
      })}
    </div>
  );
};

export default HerosLists;

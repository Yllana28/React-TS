import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Count from "../component/Count";
import HerosLists from "../pages/herosLists";
import HeroDetails from "../pages/heroDetails";
import Formulaire from "../component/Formulaire";
import Get from "../component/Get";
import GetById from "../component/GetById";
import HeroEdit from "../pages/HeroEdit";
import CreateHero from "../pages/CreateHero";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HerosLists />,
    },
    {
      path: "/get",
      element: <Get />,
    },
    {
      path: "/get/:id",
      element: <GetById />,
    },
    {
      path: "/edit/:id",
      element: <HeroEdit />,
    },
    {
      path: "/create",
      element: <CreateHero />,
    },
    {
      path: "/heros/:id",
      element: <HeroDetails />,
    },
    {
      path: "/formulaire",
      element: <Formulaire />,
    },
    {
      path: "/count",
      element: <Count />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Router;

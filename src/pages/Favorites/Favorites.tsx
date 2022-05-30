import React from "react";
import "./Favorites.css";
import { useAppSelector } from "../../hooks/redux";
import CatsList from "../../components/CatsList/CatsList";

type Props = {};

const Favorites = (props: Props) => {
  //State Redux
  const { cats } = useAppSelector((state) => state.catsReducer);

  const favoritesCats = cats.filter((cat) => cat.isInFavorites);

  if (!favoritesCats.length) {
    return <div>Нет любимых котиков</div>;
  }

  return <CatsList cats={favoritesCats} />;
};

export default Favorites;

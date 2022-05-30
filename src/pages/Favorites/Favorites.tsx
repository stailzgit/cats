import React from "react";
import "./Favorites.css";
import { useAppSelector } from "../../hooks/redux";
import CatsList from "../../components/CatsList/CatsList";

const Favorites = () => {
  //State Redux
  const { cats } = useAppSelector((state) => state.catsReducer);

  const favoritesCats = cats.filter((cat) => cat.isInFavorites);

  if (!favoritesCats.length) {
    return <h2 className="no-fav-cats">Нет любимых котиков :(</h2>;
  }

  return <CatsList cats={favoritesCats} />;
};

export default Favorites;

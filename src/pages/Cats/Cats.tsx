//Base
import React, { useEffect } from "react";
import "./Cats.css";
//Hooks
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { useObserver } from "../../hooks/useObserver";
import { useRef } from "react";
//Components
import CatsList from "../../components/CatsList/CatsList";

const Cats = () => {
  const { fetchCats, setPage } = useActions();
  const { cats, error, isLoading, limit, totalPages, page } = useAppSelector(
    (state) => state.catsReducer
  );

  const lastElement = useRef(null);

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchCats(limit, 1);
  }, []);

  useEffect(() => {
    fetchCats(limit, page);
  }, [page]);

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <CatsList cats={cats} />
      <div className="last-element" ref={lastElement}></div>
      {isLoading && (
        <div className="cats-loading">... загружаем еще котиков ...</div>
      )}
    </>
  );
};

export default Cats;

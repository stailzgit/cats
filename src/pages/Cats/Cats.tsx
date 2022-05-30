import React, { useEffect, useState } from "react";
import "./Cats.css";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import Cat from "../../components/Cat/Cat";
import { useObserver } from "../../hooks/useObserver";
import { useRef, MutableRefObject } from "react";
import CatsList from "../../components/CatsList/CatsList";
type Props = {};

const Cats = (props: Props) => {
  const { fetchCats } = useActions();
  const { cats, error, isLoading } = useAppSelector(
    (state) => state.catsReducer
  );
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const lastElement = useRef(null);

  useObserver(lastElement, true, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchCats(10, 1);
  }, []);

  useEffect(() => {
    fetchCats(10, page);
  }, [page]);

  if (error) return <div>{error}</div>;

  // return (
  //   <div className="cats__wrap">
  //     <div className="container">
  //       <div className="cats">
  //         {cats.map((cat, index) => (
  //           <Cat key={"" + cat.id + index} {...cat} />
  //         ))}
  //         <div ref={lastElement}>last</div>
  //         {isLoading && (
  //           <div>Loading.......................................</div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <CatsList cats={cats} />
      <div ref={lastElement}>last</div>
      {isLoading && <div>Loading...</div>}
    </>
  );
};

export default Cats;

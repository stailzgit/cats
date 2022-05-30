import React from "react";
import { ICat } from "../../models/ICat";
import Cat from "../Cat/Cat";

type Props = {
  cats: ICat[];
};

const CatsList = ({ cats }: Props) => {
  return (
    <div className="cats__wrap">
      <div className="container">
        <div className="cats">
          {cats.map((cat, index) => (
            <Cat key={"" + cat.id + index} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatsList;

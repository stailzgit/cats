//Base
import React, { useMemo, useState } from "react";
import "./Cat.css";
//Components
import { ICat } from "../../models/ICat";
import HeartFilledImg from "../../assets/heart-filled.svg";
import HeartBorderImg from "../../assets/heart-border.svg";
//Hooks
import { useActions } from "../../hooks/useActions";
import { useDoubleTap } from "use-double-tap";

const Cat = React.memo((props: ICat) => {
  const { id, url, isInFavorites } = props;
  //Actions
  const { toggleFavorites } = useActions();
  //Local state
  const [isLoadedImg, setIsLoadedImg] = useState(false);
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const [hoveredCat, setHoveredCat] = useState(false);

  //Styles
  const styleCatImg = isLoadedImg ? "cat__img" : "cat__img--loading";

  let favIcon = "";

  const isShowFav = isInFavorites || hoveredHeart || hoveredCat;

  if (isInFavorites || hoveredHeart) {
    favIcon = HeartFilledImg;
  } else if (hoveredCat) {
    favIcon = HeartBorderImg;
  } else {
    favIcon = "";
  }

  //Functions Redux
  const onFavClick = () => toggleFavorites(id);

  //Functions local
  const onCatImgLoad = () => setIsLoadedImg(true);

  const bindDoubleTouch = useDoubleTap(() => {
    onFavClick();
  });

  return (
    <div
      className="cat__wrap"
      onMouseOver={() => setHoveredCat(true)}
      onMouseOut={() => setHoveredCat(false)}
      {...bindDoubleTouch}
    >
      <img
        src={url}
        className={styleCatImg}
        alt="img-cat"
        onLoad={onCatImgLoad}
      />
      <div
        className="cat__fav-wrap"
        onClick={onFavClick}
        onMouseOver={() => setHoveredHeart(true)}
        onMouseOut={() => setHoveredHeart(false)}
      >
        {isShowFav && <img className="cat__fav-img" src={favIcon} alt="" />}
      </div>
    </div>
  );
});

export default Cat;

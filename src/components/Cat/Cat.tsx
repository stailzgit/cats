import React, { useMemo, useState } from "react";
import "./Cat.css";
import { ICat } from "../../models/ICat";
import CatPreview from "../../assets/cat_preview.png";
import HeartFilledImg from "../../assets/heart-filled.svg";
import HeartBorderImg from "../../assets/heart-border.svg";
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

  const catImg = isLoadedImg ? url : CatPreview;

  let favIcon = "";

  const isShowFav = isInFavorites || hoveredHeart || hoveredCat;

  if (isInFavorites || hoveredHeart) {
    favIcon = HeartFilledImg;
  } else if (hoveredCat) {
    favIcon = HeartBorderImg;
  } else {
    favIcon = "";
  }

  const onFavClick = () => toggleFavorites(id);

  const onCatImgLoad = () => setIsLoadedImg(true);

  const bind = useDoubleTap((event) => {
    onFavClick();
  });

  return (
    <div
      className="cat__wrap"
      onMouseOver={() => setHoveredCat(true)}
      onMouseOut={() => setHoveredCat(false)}
      {...bind}
    >
      <img
        src={catImg}
        className="cat__img"
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

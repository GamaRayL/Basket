import css from "./styles.module.css";
import { Button } from "../Inputs/Button";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { setItemInCard } from "../../redux/card/reducer";

export const Card = (props) => {
  // const [isAdded, setIsAdded] = useState(true);
  const dispatch = useDispatch();
  // const handleChanger = () => {
  //   setIsAdded(false);
  // };

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCard(props));
  };

  return (
    <div className={css.card}>
      <div className={css.cardImage}>
        <img src={props.image} height="240px" width="240px" alt="" />
      </div>
      <p className={css.cardTitle}>{props.name}</p>
      <p className={css.cardDescription}>{props.description}</p>
      <p className={css.cardPrice}>{props.price} ₽</p>
      <Button onClick={handleClick}>
        Добавить в корзину
        {/* {isAdded ? "Добавить в корзину" : "Товар добавлен"} */}
      </Button>
    </div>
  );
};

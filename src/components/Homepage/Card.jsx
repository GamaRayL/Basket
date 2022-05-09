import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCard, setItemInCard } from "../../redux/card/reducer";
import { Button } from "../Inputs/";
import css from "./styles.module.css";

export const Card = (product) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card.itemsInCard);
  const isItemInCard = items.some((item) => item.id === product.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCard) {
      dispatch(deleteItemFromCard(product.id));
    } else {
      dispatch(setItemInCard(product));
    }
  };

  return (
    <div className={css.card}>
      <div className={css.cardImage}>
        <img src={product.image} height={240} width={240} alt="" />
      </div>
      <p className={css.cardTitle}>{product.name}</p>
      <p className={css.cardDescription}>{product.description}</p>
      <p className={css.cardPrice}>{product.price.toLocaleString("ru-RU")} ₽</p>
      <Button
        buttonStyle={
          isItemInCard ? "btn--primary--outlined" : "btn--primary--contained"
        }
        onClick={handleClick}
      >
        {isItemInCard ? "Убрать из корзины" : "Добавить в корзину"}
      </Button>
    </div>
  );
};

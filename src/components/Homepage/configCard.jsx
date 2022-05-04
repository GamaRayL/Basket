import data from "../../data.json";
import css from "./styles.module.css";
import { Button } from "../Inputs/Button";

export const configCard = data.products.map((product) => {
  return (
    <div key={product.art} className={css.card}>
      <div className={css.cardImage}>
        <img src={product.image} height="240px" width="240px" alt="" />
      </div>
      <p className={css.cardTitle}>{product.name}</p>
      <p className={css.cardDescription}>{product.description_full}</p>
      <p className={css.cardPrize}>{product.prize} ₽</p>
      <Button className="outlined">Добавить в корзину</Button>
    </div>
  );
});

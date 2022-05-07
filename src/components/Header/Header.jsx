import css from "./styles.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../countPrice";
import { ProductsInBasket } from "./ProductsInBasket";

export const Header = () => {
  const items = useSelector((state) => state.card.itemsInCard);
  const totalPrice = calcTotalPrice(items);

  return (
    <header className={css.header}>
      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/basket">Корзина</Link>
          </li>
        </ul>
      </div>

      <div className={css.backet}>
        <div className={css.backetIcon}>
          <ProductsInBasket quantity={items.length} />
          <img src="/images/basket.svg" alt="" />
        </div>
        <div className={css.backetDescription}>
          <p className={css.backetHeader}>Ваша корзина</p>
          {totalPrice > 0 ? (
            <p className={css.backetTotal}>
              {totalPrice.toLocaleString("ru-RU")} ₽
            </p>
          ) : (
            "пуста"
          )}
          <p className={css.backetAmount}>3 товара</p>
        </div>
      </div>
    </header>
  );
};

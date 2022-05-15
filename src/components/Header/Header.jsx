import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcTotalPrice } from "../countPrice";
import { calcTotalQuantity } from "../countQuantity";
import { ProductsInBasket } from "./ProductsInBasket";
import css from "./styles.module.css";

export const Header = () => {
  const items = useSelector((state) => state.card.itemsInCard);
  const totalPrice = calcTotalPrice(items);
  const totalQuantity = calcTotalQuantity(items);

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
          <ProductsInBasket
            totalQuantity={totalQuantity}
            quantity={items.length}
          />
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
        </div>
      </div>
    </header>
  );
};

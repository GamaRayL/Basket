import css from "./styles.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const items = useSelector((state) => state.card.itemsInCard);
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
          <img src="/images/basket.svg" alt="" />
        </div>
        <div className={css.backetDescription}>
          <p className={css.backetHeader}>Ваша корзина</p>
          <p className={css.backetAmount}>3 товара</p>
          <p className={css.backetTotal}>50 576 ₽</p>
        </div>
      </div>
    </header>
  );
};

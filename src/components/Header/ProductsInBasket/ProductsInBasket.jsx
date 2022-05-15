import css from "./styles.module.css";

export const ProductsInBasket = ({ totalQuantity = 0 }) => {
  return totalQuantity > 0 ? (
    <div className={css.productsInBasket}>{totalQuantity}</div>
  ) : null;
};

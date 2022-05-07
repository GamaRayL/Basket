import css from "./styles.module.css";

export const ProductsInBasket = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={css.productsInBasket}>{quantity}</div>
  ) : null;
};

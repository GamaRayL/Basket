import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteItemFromCard,
  increasePrice,
  increaseQuantity,
} from "../../../redux/card/reducer";
import css from "./styles.module.css";

export const ProductCollection = ({ items }) => {
  const itemId = items.map((item) => item.id);
  const [increaseCount, setIncreaseCount] = useState(1);
  const [decreaseCount, setDecreaseCount] = useState(1);
  const dispatch = useDispatch();

  const deleteItemFromCollection = (id) => {
    dispatch(deleteItemFromCard(id));
  };

  const increaseInsideItem = (product) => {
    // eslint-disable-next-line eqeqeq
    if (itemId == product.id) {
      setIncreaseCount(increaseCount + 1);
      dispatch(increaseQuantity(increaseCount));
      dispatch(increasePrice(product.price));
    } else return null;
  };

  const decreaseInsideItem = (product) => {
    if (itemId === product.id) {
      setDecreaseCount(decreaseCount - 1);
    } else return null;
  };

  return (
    <div className={css.collection}>
      <div className={css.top}>
        <span className={css.title}>Ваша корзина</span>
        <span className={css.amountProduct}>
          {items.length > 0 ? `${items.length} товара` : null}
        </span>
        <span className={css.deleteAll}>Очистить корзину</span>
      </div>
      {items.map((item) => (
        <div key={item.id} className={css.product}>
          <div className={css.productIcon}>
            <img width={100} height={100} src={item.image} alt="" />
          </div>
          <div className={css.produtInfo}>
            <p className={css.subtitle}>{item.name_full}</p>
            <p className={css.productDescription}>{item.description}</p>
            <p className={css.vendorCode}>{item.art}</p>
          </div>
          <div className={css.productCount}>
            <span className={css.decrement} onClick={decreaseInsideItem(item)}>
              -
            </span>
            <span className={css.count}>{item.quantity}</span>
            <span
              className={css.increment}
              onClick={() => increaseInsideItem(item)}
            >
              +
            </span>
          </div>
          <div className={css.productPriceAmount}>
            {item.totalPrice.toLocaleString("ru-RU")} ₽
          </div>
          <div
            className={css.deleteIcon}
            onClick={() => deleteItemFromCollection(item.id)}
          >
            <img src="./images/delete.svg" alt="" />
          </div>
        </div>
      ))}
      <div className={css.footer}></div>
    </div>
  );
};

import { Button } from "../../Inputs";
import css from "./styles.module.css";

export const TotalBasket = ({ totalPrice, items }) => {
  return (
    <div className={css.total}>
      <p className={css.smallTitle}>Итого</p>
      <div className={css.rowPoint}>
        <span>Сумма заказа</span>
        <span>
          {items.length > 0 ? `${totalPrice.toLocaleString("ru-RU")} ₽` : "-"}
        </span>
      </div>
      <div className={css.rowPoint}>
        <span>Количество</span>
        <span>{items.length > 0 ? `${items.length} шт` : "-"}</span>
      </div>
      <div className={css.rowPoint}>
        <span>Установка</span>
        <span>{items.length > 0 ? "Добавить логику к установке" : "-"}</span>
      </div>
      <hr />
      <div className={css.rowPoint}>
        <span className={css.descriptionValue}>Стоимость товара</span>
        <span className={css.valueOfGoods}>
          {items.length > 0 ? `${totalPrice.toLocaleString("ru-RU")} ₽` : null}
        </span>
      </div>
      <Button>Оформить заказ</Button>
      <br />
      <Button buttonStyle="btn--primary--outlined">Купить в 1 клик</Button>
    </div>
  );
};

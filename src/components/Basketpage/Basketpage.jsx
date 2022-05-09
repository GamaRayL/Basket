import { useSelector } from "react-redux";
import { ProductCollection } from "./ProductCollection";
import { TotalBasket } from "./TotalBasket";
import { calcTotalPrice } from "../countPrice";
import css from "./styles.module.css";

export const Basketpage = () => {
  const items = useSelector((state) => state.card.itemsInCard);
  const totalPrice = calcTotalPrice(items);
  return (
    <main className={css.container}>
      <ProductCollection items={items} />
      <TotalBasket items={items} totalPrice={totalPrice} />
    </main>
  );
};

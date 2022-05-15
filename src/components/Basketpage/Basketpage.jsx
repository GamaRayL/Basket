import { useSelector } from "react-redux";
import { ProductCollection } from "./ProductCollection";
import { TotalBasket } from "./TotalBasket";
import { calcTotalPrice } from "../countPrice";
import { calcTotalQuantity } from "../countQuantity";
import css from "./styles.module.css";

export const Basketpage = () => {
  const items = useSelector((state) => state.card.itemsInCard);
  const totalPrice = calcTotalPrice(items);
  const totalQuantity = calcTotalQuantity(items);
  return (
    <main className={css.container}>
      <ProductCollection items={items} />
      <TotalBasket
        items={items}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
      />
    </main>
  );
};

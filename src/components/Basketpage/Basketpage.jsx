import css from "./styles.module.css";
import { ProductCollection } from "./ProductCollection";
import { TotalBasket } from "./TotalBasket";
import { Service } from "./Service";
import { useSelector } from "react-redux";

export const Basketpage = () => {
  const items = useSelector((state) => state.card.itemsInCard);
  return (
    <main className={css.container}>
      <ProductCollection items={items}/>
      <TotalBasket />
      <Service />
    </main>
  );
};

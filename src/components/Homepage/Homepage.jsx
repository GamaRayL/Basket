import { Card } from "./Card";
import data from "../../data";
import css from "./styles.module.css";

export const Homepage = () => {
  return (
    <div className={css.container}>
      {data.products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

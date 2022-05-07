import { Card } from "./Card";
import css from "./styles.module.css";
import data from "../../data.json";

export const Homepage = () => {
  return (
    <div className={css.container}>
      {data.products.map((product) => (
        <Card
          id={product.id}
          product={product}
          key={product.art}
          name={product.name}
          image={product.image}
          price={product.priсe}
          description={product.description}
        />
      ))}
    </div>
  );
};

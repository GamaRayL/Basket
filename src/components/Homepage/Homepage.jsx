import { configCard } from "./configCard";
import css from "./styles.module.css"

export const Homepage = () => {
  return <div className={css.container}>{configCard}</div>;
};

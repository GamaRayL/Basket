import css from "./styles.module.css";

export const Basketpage = () => {
  return (
    <main className={css.container}>
      <div className={css.collection}>
        <div className={css.top}>
          <span className={css.topHeader}>Ваша корзина</span>
          <span className={css.topAmount}>4 товара</span>
          <span className={css.topDeleteAll}>Очистить корзину</span>
        </div>
        <div className={css.main}></div>
        <div className={css.footer}></div>
      </div>
      <div className={css.amount}></div>
    </main>
  );
};

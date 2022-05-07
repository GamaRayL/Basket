export const calcTotalPrice = (products) =>
  products.reduce((acc, product) => (acc += product.price), 0);

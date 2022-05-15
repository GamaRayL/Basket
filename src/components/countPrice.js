export const calcTotalPrice = (items) =>
  items.reduce((acc, item) => (acc += item.price * item.quantity), 0);

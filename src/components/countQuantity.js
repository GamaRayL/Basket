export const calcTotalQuantity = (items) =>
  items.reduce((acc, item) => (acc += item.quantity), 0);

// // Экспорт модуля
console.log('Экспорт модуля');
// // блокирующий код
// // console.log('Начало извлечение пользователей');
// // const result = await fetch('https://jsonplaceholder.typicode.com/users');
// // console.log('Конец извлечения юзеров');

const shoppingCost = 20;
export const cart = [];

export const addProductToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} в количестве ${quantity} шт добавлено в корзину`);
};

const totalPrice = 300;
const totalQuantity = 4;
export { totalPrice, totalQuantity as quantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} в количестве ${quantity} шт добавлено в корзину`);
}

import { calcStock, products, addProducts } from './products.service';

addProducts({
  name: 'Polera',
  createdAt: new Date(1994, 1, 1),
  stock: 10,
});
addProducts({
  name: 'anillo',
  createdAt: new Date(1994, 1, 1),
  stock: 100,
});

console.log(products);
console.log(calcStock());

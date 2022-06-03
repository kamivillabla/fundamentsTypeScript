import { Product } from './products.modules';

export const products: Product[] = [];

export const addProducts = (data: Product) => {
  products.push(data);
};

export const calcStock = () => {
  const stock = products.reduce((total, product) => {
    return total + product.stock;
  }, 0);
  return stock;
};

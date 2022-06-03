(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductToJson2 = (
    product: string,
    createdAt: Date,
    stock: number,
    // le pongo para que prevenga un error y si no existe el size le da null - variable opcional
    size?: Sizes
  ) => ({ product, createdAt, stock, size });

  const producto1 = createProductToJson2('Camiseta', new Date(), 10, 'S');
  console.log(producto1);

  const product2 = createProductToJson2('Pantalon', new Date(), 12);
  console.log(product2);
})();

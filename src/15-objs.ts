(() => {
  type Sizes = 'small' | 'medium' | 'large';

  // Le digo que sera de todo tipo de datos
  const products: any[] = [];

  // Creo una interfaz con los tipos de datos que utilizare
  interface Product {
    name: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }

  // Función de agregar productos con el parametro data que es igual a la interfaz
  const addProducts = (data: Product) => {
    products.push(data);
  };

  addProducts({
    name: 'Polera',
    createdAt: new Date(1994, 1, 1),
    stock: 10,
  });
  addProducts({
    name: 'pantalon',
    createdAt: new Date(1994, 1, 1),
    stock: 15,
    size: 'large',
  });
  console.log(products);
})();

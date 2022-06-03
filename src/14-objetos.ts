(() => {
  type User = { email: string; password: string | number };

  const login = (user: User) => {
    console.log(user.email, user.password);
  };

  const jesusUser = {
    email: 'hdjesus',
    password: 12121,
  };

  login(jesusUser);

  type Sizes = 'small' | 'medium' | 'large';

  const products: any[] = [];

  const addProducts = (data: {
    name: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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

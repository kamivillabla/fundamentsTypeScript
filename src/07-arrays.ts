(() => {
  let price = [1, 2, 3, 4, 5, 'hola', true];
  price.pop();
  console.log(price);
  /*  let products = ['hola', true];
  products.push(12); // No me deja meter un numero porque la forma inferida es string y boolean. */

  // Mixtos
  let mixed: (number | string | boolean)[] = ['hola', true];

  mixed.push(12);
  console.log(mixed);

  // numbers
  let numbers: number[] = [1, 2, 3, 4, 5];
  const numbers2 = numbers.map((item) => item * 2);
  console.log(numbers2);
})();

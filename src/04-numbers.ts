(() => {
  let productPrice = 100;
  productPrice = 200;
  console.log('producPrice: ', productPrice);

  let customerAge: number = 28;

  // Cuando no le ponemos un valor si hay que declarar el tipo de valor es porque no lo podemos dejar con motor de inferencia porque no le estamos poniendo ningún valor.
  let productInStock: number;
  productInStock = 15;

  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('es mayor');
  } else {
    console.log('es menor');
  }

  // NaN es dentro del conjunto de números
  let discount = parseInt('adasdads');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('aplicar');
  } else {
    console.log('No aplicar');
  }
  let hex = 0xfff;
  console.log(`Hex ${hex}`);
  let bin = 0b1010; // 10
  console.log(`bin ${bin}`);
  console.log(`suma hex y bin ${hex + bin} `);
})();

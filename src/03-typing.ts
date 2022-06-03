//Función anonima auto ejecutada

(() => {
  // Motor de inferencia
  // Cuando es let dice el tipo que es y el que no se puede cambiar
  let myProductName = 'Product 1';
  let myProductPrice = 1000;

  myProductName.toLocaleUpperCase();
  myProductPrice.toFixed();

  // En la costante no sale el tipo porque al ser constante de todas formas no se podrá reasignar.
  const myProductStock = 1000;
})();

(() => {
  let isEnable = true;

  let isNew: boolean = false;

  console.log('isNew', isNew);

  // Sacar numeros del 0 a 1 pero con decimales 0.1, 0.2 ... etc.
  const random = Math.random();
  console.log('random', random);
  // Operador ternario
  isNew = random >= 0.5 ? true : false;
  console.log(isNew);
})();

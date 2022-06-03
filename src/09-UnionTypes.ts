(() => {
  // ejemplo uno
  let x: number | string | boolean;
  x = 'hello';
  x = 10;
  x = true;
  x = 'hello';
  x = 10;
  x = true;

  // ejemplo 2
  const stringObjet = (myText: string | number) => {
    return myText;
  };
  console.log(stringObjet('kamila'));

  // Ejemplo 3

  const greeting = (myText: string | number) => {
    if (typeof myText === 'string') {
      console.log(`soy un texto ${myText}`);
    } else {
      console.log(`soy un numero ${myText}`);
    }
  };
  console.log(greeting('kamila soy stirng'));
})();

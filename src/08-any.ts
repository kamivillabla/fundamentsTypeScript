(() => {
  // El tipo de dato any “desactiva” el tipado de TS, volviendo de cierta forma a JS.
  //No es recomendado usar any. Sin embargo, puede ser útil cuando estamos migrando código JS a TS.
  //Podemos convertir de any a cualquier otro tipo de dato con el as operator. Este se usa de la siguiente forma.
  //Ejemplo 1
  let myFavoriteNumber: any = 'seven';
  myFavoriteNumber = 7;
  console.log(`myFavoriteNumber is ${myFavoriteNumber}`);

  // Ejemplo 2: transformar
  let foo: any = null;
  foo = 'My name is Kamila Villablanca';

  const rta = foo as string;
  console.log(rta);

  //Ejemplo 3: transformar 2
  foo = 12121;
  const rta2 = <number>foo;
  console.log(rta2);
})();

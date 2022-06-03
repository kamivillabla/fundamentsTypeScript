(() => {
  let userId: string | number;

  // Uso exclusivo de Typescript para crear mis propios tipos de datos y usarlo de referencia, se parte con mayuscula.
  type UserID = string | number;

  const greeting = (userId: UserID) => {
    if (typeof userId === 'string') {
      console.log(`soy un texto ${userId}`);
    }
  };

  // Literal types
  // No puedo poner otro que no este dentro de los valores
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const value: Sizes = 'S';
  console.log(`soy un size ${value}`);

  const nose = (userId: UserID, sizes: Sizes) => {
    if (typeof userId === 'string') {
      console.log(`soy un texto ${userId} - ${sizes}`);
    }
  };
})();

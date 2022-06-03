(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // Puede ser número pero por x razón quiero que inicialice como null
  let myNumber: number | null = null;
  console.log(myNumber);

  // Si todo lo que esta antes de name no existe entonces devuelve null, si existe entonces devuelve name con el tolocalelowercase()
  function hiV2(name: string | null) {
    name?.toLowerCase() || 'nobody';
    console.log('hello');
  }
  console.log(hiV2('Juan'));
})();

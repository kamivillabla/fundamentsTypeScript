(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0);
  };

  // Otro ejercicio
  console.log(calcTotal([10, 20, 30])); // 6
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };
  printTotal([10, 20, 30, 40]);
})();

function pertenceFibonacci(num) {
  let a = 0, b = 1;
  while (b <= num) {
    if (b === num) return true;
    [a, b] = [b, a + b];
  }
  return false;
}
  
const numero = 20; 
console.log(
  pertenceFibonacci(numero)
    ? `O número ${numero} pertence à sequência de Fibonacci.`
    : `O número ${numero} NÃO pertence à sequência de Fibonacci.`
);
  
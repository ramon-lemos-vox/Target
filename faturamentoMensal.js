const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
Object.entries(faturamento).forEach(([estado, valor]) => {
  const percentual = ((valor / total) * 100).toFixed(2);
  console.log(`Estado: ${estado}, Percentual: ${percentual}%`);
});

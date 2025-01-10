function inverteString(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      invertida += texto[i];
    }
    return invertida.replace(/\s+/g, '');
  }
  
  const texto = "desafio target"; 
  console.log("String invertida:", inverteString(texto));
  
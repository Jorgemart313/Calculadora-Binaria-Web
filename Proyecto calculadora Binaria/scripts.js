// Esperamos que cargue todo el HTML antes de ejecutar
document.addEventListener("DOMContentLoaded", () => {

  // === DECIMAL A BINARIO ===
  const formDecimal = document.getElementById("formulario decimalABinario");
  const resultadoDecimal = document.getElementById("resultadoDecimal");

  formDecimal.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numeroAconvertir").value);
    if (isNaN(numero)) return resultadoDecimal.textContent = "Por favor ingresa un número válido.";
    resultadoDecimal.textContent = numero.toString(2);
  });

  // === BINARIO A DECIMAL ===
  const formBinario = document.getElementById("formulario binarioADecimal");
  const resultadoBinario = document.getElementById("resultadoBinario");

  formBinario.addEventListener("submit", (e) => {
    e.preventDefault();
    const binario = document.getElementById("numeroBinarioAconvertir").value;
    if (!/^[01]+$/.test(binario)) return resultadoBinario.textContent = "Solo se permiten 0 y 1.";
    resultadoBinario.textContent = parseInt(binario, 2);
  });

  // === SUMA DE BINARIOS ===
  const formSuma = document.getElementById("formulario sumaDeBinarios");
  const resultadoSuma = document.getElementById("resultadoSumaBinarios");

  formSuma.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = document.getElementById("primerNumeroBinario").value;
    const b = document.getElementById("segundoNumeroBinario").value;
    if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b))
      return resultadoSuma.textContent = "Solo se permiten 0 y 1.";
    const suma = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    resultadoSuma.textContent = suma;
  });

  // === RESTA DE BINARIOS ===
  const formResta = document.getElementById("formulario restaDeBinarios");
  const resultadoResta = document.getElementById("resultadoRestaBinarios");

  formResta.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = document.getElementById("primerNumeroBinarioResta").value;
    const b = document.getElementById("segundoNumeroBinarioResta").value;
    if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b))
      return resultadoResta.textContent = "Solo se permiten 0 y 1.";
    const resta = (parseInt(a, 2) - parseInt(b, 2)).toString(2);
    resultadoResta.textContent = resta;
  });

  // === MULTIPLICACIÓN DE BINARIOS ===
  const formMult = document.getElementById("formulario multiplicacionDeBinarios");
  const resultadoMult = document.getElementById("resultadoMultiplicacionBinarios");

  formMult.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = document.getElementById("primerNumeroBinarioMultiplicacion").value;
    const b = document.getElementById("segundoNumeroBinarioMultiplicacion").value;
    if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b))
      return resultadoMult.textContent = "Solo se permiten 0 y 1.";
    const multiplicacion = (parseInt(a, 2) * parseInt(b, 2)).toString(2);
    resultadoMult.textContent = multiplicacion;
  });

  // === DIVISIÓN DE BINARIOS ===
  const formDiv = document.getElementById("formulario divisionDeBinarios");
  const resultadoDiv = document.getElementById("resultadoDivisionBinarios");

  formDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = document.getElementById("primerNumeroBinarioDivision").value;
    const b = document.getElementById("segundoNumeroBinarioDivision").value;
    if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b))
      return resultadoDiv.textContent = "Solo se permiten 0 y 1.";
    if (parseInt(b, 2) === 0)
      return resultadoDiv.textContent = "No se puede dividir entre 0.";
    const division = Math.floor(parseInt(a, 2) / parseInt(b, 2)).toString(2);
    resultadoDiv.textContent = division;
  });
});

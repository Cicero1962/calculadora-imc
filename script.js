function calcularIMC(peso, altura) {
  return peso / (altura * 2);
}

var pesoInput = document.getElementById('peso');
var alturaInput = document.getElementById('altura');
var resultado = document.getElementById('resultado');
var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const calculo = calcularIMC(pesoInput.value, alturaInput.value);
  resultado.innerText = calculo;
});

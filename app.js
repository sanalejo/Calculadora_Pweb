function limpiarResultado() {
  document.getElementById('resultado').innerHTML = '';
}


function miCodigo() {
  limpiarResultado();
  document.getElementById('resultado').innerHTML = '1410069565'
}
document.getElementById('imprimir').addEventListener('click', miCodigo)


document.getElementById('ce').addEventListener('click', limpiarResultado);

function setNumero(num) {
  const valorInicial = document.getElementById('resultado').textContent;
  if (!valorInicial) {
    document.getElementById('resultado').innerHTML = num;
  } else {
    document.getElementById('resultado').innerHTML = valorInicial + '' + num
  }
}
document.getElementById('n0').addEventListener('click', () => setNumero(0));
document.getElementById("n1").addEventListener("click", () => setNumero(1));
document.getElementById("n2").addEventListener("click", () => setNumero(2));
document.getElementById("n3").addEventListener("click", () => setNumero(3));
document.getElementById("n4").addEventListener("click", () => setNumero(4));
document.getElementById("n5").addEventListener("click", () => setNumero(5));
document.getElementById("n6").addEventListener("click", () => setNumero(6));
document.getElementById("n7").addEventListener("click", () => setNumero(7));
document.getElementById("n8").addEventListener("click", () => setNumero(8));
document.getElementById("n9").addEventListener("click", () => setNumero(9));

function setOperador(operador) {
  const valorInicial = document.getElementById('resultado').textContent;
  if (valorInicial) {
    document.getElementById('resultado').innerHTML = valorInicial + operador;
  }
}
document.getElementById("s").addEventListener("click", () => setOperador('+'));
document.getElementById("r").addEventListener("click", () => setOperador('-'));
document.getElementById("m").addEventListener("click", () => setOperador('*'));
document.getElementById("d").addEventListener("click", () => setOperador('/'));

function resultado() {
  const valor = document.getElementById('resultado').textContent,
    array = Array.from(valor),
    operadores = ['+', '-', '*', '/'];
  if (valor) {
    if (operadores.indexOf(array[array.length - 1]) !== -1) {
      array.splice((array.length - 1), 1);
    }
    limpiarResultado();
    document.getElementById('resultado').innerHTML = eval(array.join(''));
  }
}

document.getElementById('res').addEventListener('click', resultado);
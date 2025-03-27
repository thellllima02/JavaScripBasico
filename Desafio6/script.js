let lista = [];
let maior1 = 0;
let menor1 = 0;
let soma1 = 0;
let media1 = 0;

function adicionar() {
  var numero = Number(document.getElementById("txtNum").value);
  var selec = document.getElementById("selec");
  var res = document.getElementById("res");

  if (numero <= 0 || numero > 100) {
    alert("Digite um número valido entre 1 a 100");
    limpar();
    return;
  }
  if (lista.includes(numero)) {
    alert("Número ja adicionado anteriormente");
    limpar();
    return;
  }
  lista.push(numero);

  var item = document.createElement("option");
  item.text = `Número ${numero} adicionado`;
  selec.appendChild(item);
  limpar();
}

function limpar() {
  document.getElementById("txtNum").value = "";
  document.getElementById("txtNum").focus();
}

function finalizar() {
  var todo = document.getElementById("todo");
  var maior = document.getElementById("maior");
  var menor = document.getElementById("menor");
  var soma = document.getElementById("soma");
  var media = document.getElementById("media");

  maior2();
  menor2();
  soma2();
  media2();

  todo.innerHTML = `Ao todo, temos ${lista.length} números cadastrados`;
  maior.innerHTML = `O maior valor informado foi ${maior1}`;
  menor.innerHTML = `O menor valor informado foi ${menor1}`;
  soma.innerHTML = `Somando todos os valores, temos ${soma1}`;
  media.innerHTML = `A media dops valores digitados é ${media1}`;
}

function maior2() {
  maior1 = lista.reduce((max, num) => (num > max ? num : max), lista[0]);
}

function menor2() {
  menor1 = lista.reduce((min, num) => (num < min ? num : min), lista[0]);
}

function soma2(){
  soma1 = lista.reduce((total, num) => num + total, 0)
}

function media2(){
  media1 = soma1 / lista.length;
}

let lista = [];

function adicionar() {
  var numero = Number(document.getElementById("txtNum").value);
  var res = document.getElementById("res");

  if (numero <= 0 || numero > 100) {
    alert("Digite um número valido entre 1 a 100");
    return;
  }
  if (lista.includes(numero)) {
    alert("Número ja adicionado anteriormente");
    limpar();
    return;
  }
  lista.push(numero);

  res.innerHTML = lista.map((num) => `<li>${num}</li>`).join("");
  limpar();
}

function limpar() {
  document.getElementById("txtNum").value = "";
  document.getElementById("txtNum").focus();
}

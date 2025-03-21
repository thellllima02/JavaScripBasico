function Contar() {
  var inicio = Number(document.getElementById("txtIni").value);
  var fim = Number(document.getElementById("txtFim").value);
  var passo = Number(document.getElementById("txtPas").value);
  var res = document.querySelector("div#res");

  var cont = 0;
  res.innerHTML = "Contando";

  if (inicio <= 0) {
    alert("Digite um número maior que 0");
    return;
  } 
  else if (fim <=inicio) {
    alert("Digite um número final maior que o inicial");
    return;
  }

  for (var q = inicio; q < fim; q += passo) {
    cont++;
    res.innerHTML += `${q} 👉 `;
  }

  res.innerHTML += `🏁<br> Quantos pulos deu: ${cont}`;
}

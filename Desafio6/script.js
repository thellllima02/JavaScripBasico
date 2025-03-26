function adicionar() {
  var numero = Number(document.getElementById("txtNum").value);
  var res = document.getElementById("res");
  res.innerHTML = `Um teste ${numero}`;

  if(numero <=0 || numero >100){
    alert('Digite um número valido')
  }
}

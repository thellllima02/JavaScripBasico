function Tabuada() {
  var inicio = Number(document.getElementById("txtIni").value);
  var tab = document.getElementById("txtsel");
  var res = document.querySelector("div#res");

  var cont = 0;
  tab.innerHTML= '';
  res.innerHTML = `Tabuada do ${inicio} <br><br>`;

  if (inicio < 0) {
    alert("Digite um número maior que 0");
    return;
  }
  for (var q = 0; q <=10 ; q +=1 ) {
    cont=inicio*q;
    var item = document.createElement('option');
    item.text = ` ${inicio} x ${q} = ${cont} `;
    tab.appendChild(item);
    res.innerHTML += ` ${inicio} x ${q} = ${cont} <br> `;
  } 
}

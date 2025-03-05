function verificar() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var resul = document.getElementById('resultado');

    var idd = Number(idade);
    
    if (isNaN(idd) || idd <= 0) {
        resul.innerText = "Digite uma idade válida";
    } else if (idd < 16) {
        resul.innerText = `${nome}, você ainda não pode votar`;
    } else if (idd >= 18 && idd <= 65) {
        resul.innerText = `${nome}, seu voto é obrigatório`;
    } else if(idd>65 && idd<=112){
        resul.innerText = `${nome}, seu voto é opcional`;
    } else{
        resul.innerText = "Digite uma idade válida"
    }
}

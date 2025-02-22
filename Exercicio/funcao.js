function somar(){
    var tet1 = document.querySelector('input#txt1');
    var tet2 = document.querySelector('input#txt2');
    var res = document.getElementById('resul')

    var nun1 = Number(tet1.value);
    var num2 = Number(tet2.value);

    var r = nun1 * num2;

    res.innerText = "Resuldado = "+r;

}   
function clicar(){
    var a = document.getElementById('btn');
    
    a.addEventListener('mousedown', function(){
        a.style.background = 'red'
    });

    a.addEventListener('mouseup', function(){
        a.style.background = '';
    });
}


/*
Outra forma de se fazer. 
function somar() {
    let num1 = parseFloat(document.getElementById("txt1").value);
    let num2 = parseFloat(document.getElementById("txt2").value);
    let resultado = num1 + num2;

    document.getElementById("resul").innerHTML = "Resultado: " + resultado;
}
 */
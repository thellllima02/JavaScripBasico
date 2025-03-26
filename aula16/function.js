//Função de fatorial
function fatorial(n){
    let fat= 1;
    for(let c = n; c>1; c--){
        fat*=c;
    }
    return fat;
}
console.log(fatorial(6))

//Função de recursividade
function fatorialRecurviso(numero){
    if(numero == 1 ){
        return 1;
    }else{
        return numero * fatorialRecurviso(numero-1);
    }
}
console.log(fatorialRecurviso(5))

//Função de soma
function soma(num1=0, num2=0){
    return num1 + num2;
}
console.log(soma(6, 4))
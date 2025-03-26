let num = [5,8,2,9,3];
//num[3] = 6;
//num.push(88);
//num.sort();



console.log(num.length)

//1ª forma de Mostrar 
console.log(num)

//2ª forma de Mostrar 
console.log(`Nosso vetotr é o ${num}`);

//3ª forma de Mostrar
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

//4ª forma de Mostrar
for(let pos = 0; pos< num.length; pos++){
    console.log(`A posição ${pos} tem  o valor ${num[pos]}`)
}

//5ª forma de Mostrar 
for(let pos in num){
    console.log(`A posição ${pos} tem  o valor ${num[pos]}`)
}
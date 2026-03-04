//exc 1

let nome = "Andre";
let idade = "16";
let curso = "Infonet";

console.log("Meu nome é "+ nome +" tenho "+ idade +" e estou no curso "+ curso );

//exc 2

let num1 = 2;
let num2 = 4;
let soma = num1 + num2;

console.log(soma);

//exc 3

let n1 = 2;
let n2 = 4;
let ad = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let rt = n1 % n2;
let div = n1 / n2;

console.log(ad);
console.log(sub);
console.log(mult);
console.log(rt);
console.log(div);

//exc 4 

let supernumero = "30";
let n = 30;
let resultado = supernumero + 20;
console.log(supernumero == n);

//exc 5

let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);

//exc 6

let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//exc 7

let numero = -5;

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

//exc 8

let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//exc 9

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//exc 10

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log(soma);

//exc 11

let i = 5;

while (i >= 1) {
  console.log(i);
  i--;
}

//exc 12

function somar(a, b) {
  return a + b;
}

console.log(somar(5, 3));

//exc 13

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(verificarParOuImpar(4));

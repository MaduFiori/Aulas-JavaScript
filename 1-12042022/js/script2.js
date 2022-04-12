/*
script para os cálculos das operações matemáticas
    - soma;
    - subtração;
    - multiplicação;
    - divisão;
    - resto;

será necessário mais duas variáveis para recebar 
números dos usuários
*/ 

var num1;
var num2;

// para obter o número digitado pelo usuário usaremos 
// o comando prompt (que um imput para dados)

num1 = prompt("Digite um número","0");
num2 = prompt("Digite outro número");

var soma = parseInt (num1) + parseInt (num2);
var subtrair = num1 - num2;
var multiplicar = num1 * num2;
var dividir = num1/num2;
var resto = num1 % num2;

alert("O resultado das operações é: \n\n"+
    "soma: " +soma +
    "\nSubtrair: " +subtrair +
    "\nMultiplicação: " +multiplicar +
    "\nDividindo: " +dividir +
    "\nResto: " +resto);
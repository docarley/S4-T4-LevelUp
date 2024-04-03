const solucao = document.querySelector(".exercicio__solucao-txt");

let inteiro = 7;
let decimal = 3.5;

let adicao = inteiro + decimal;
let subtracao = inteiro - decimal;
let potenciacao = (adicao - .5) ** 2;
let expressao1 = inteiro - 4 / 2 / 2;
let expressao2 = (inteiro - 4) / 2;
let expressao3 = 2 + subtracao * 2;
let expressao4 = (2 + subtracao) * 2;
let modulo1 = potenciacao % 2;
let modulo2 = (inteiro - 1) % 2;

console.log(adicao);
console.log(subtracao);
console.log(potenciacao);
console.log(expressao1);
console.log(expressao2);
console.log(expressao3);
console.log(expressao4);
console.log(modulo1);
console.log(modulo2);

let contasRealizadas = 'let inteiro = 7;<br>let decimal = 3.5;<br><br>let adicao = inteiro + decimal;<br>let subtracao = inteiro - decimal;<br>let potenciacao = (adicao - .5) ** 2;<br>let expressao1 = inteiro - 4 / 2 / 2;<br>let expressao2 = (inteiro - 4) / 2;<br>let expressao3 = 2 + subtracao * 2;<br>let expressao4 = (2 + subtracao) * 2;<br>let modulo1 = potenciacao % 2;<br>let modulo2 = (inteiro - 1) % 2;';

let resultados = `<br><br><b>Resultados</b><br>Adição=>${adicao}<br>Subtração=>${subtracao}<br>Potenciação=>${potenciacao}<br>Expressão1=>${expressao1}<br>Expressão2=>${expressao2}<br>Expressão3=>${expressao3}<br>Expressão4=>${expressao4}<br>Módulo1=>${modulo1}<br>Módulo2=>${modulo2}<br>`;

solucao.innerHTML=`${contasRealizadas}${resultados}`;


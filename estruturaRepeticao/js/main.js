const solucaoParImpar = document.querySelector('.exercicio__solucao-txt');

let resultadoParImpar = mostrarParImpar(0, 50);
solucaoParImpar.innerHTML = resultadoParImpar;


function mostrarParImpar(numInicial, numFinal) {
    let resultado = `${numInicial} - ${retornarTextoParImpar(numInicial)}<br>`;
    for (let i = numInicial+1; i <= numFinal; i++) {
        resultado = `${resultado}${i} - ${retornarTextoParImpar(i)}<br>`;
    }
    // let j=numInicial;
    // while (j<=numFinal) {
    //     resultado = `${resultado}${j} - ${retornarTextoParImpar(j)}<br>`;
    //     j++;
    // }
    return resultado;
}

function retornarTextoParImpar(numero){
    if (numero%2==0) {
        return "Par";
    }
    return "Impar";
}
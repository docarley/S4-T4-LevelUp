const solucaoParImpar = document.querySelector('#ex1');
const solucaoMultiplo3 = document.querySelector('#ex2');
const solucaoContagemRegressiva = document.querySelector('#ex3');
const solucaoJogoPim = document.querySelector('#ex4');

let resultadoParImpar = mostrarParImpar(0, 50);
solucaoParImpar.innerHTML = resultadoParImpar;

let resultadoMultiplo3 = mostrarMultiplos(0, 100, 3);
solucaoMultiplo3.innerHTML = resultadoMultiplo3;

let contagemRegressiva = mostrarContagemRegressiva(100, 0, 2);
solucaoContagemRegressiva.innerHTML = contagemRegressiva;

let resultadoJogoPim = mostrarJogoPim(40);
solucaoJogoPim.innerHTML = resultadoJogoPim;

function mostrarParImpar(numInicial, numFinal) {
    let resultado = `${numInicial} - ${retornarTextoParImpar(numInicial)}<br>`;
    for (let i = numInicial + 1; i <= numFinal; i++) {
        resultado = `${resultado}${i} - ${retornarTextoParImpar(i)}<br>`;
    }
    // let j=numInicial;
    // while (j<=numFinal) {
    //     resultado = `${resultado}${j} - ${retornarTextoParImpar(j)}<br>`;
    //     j++;
    // }
    return resultado;
}

function retornarTextoParImpar(numero) {
    if (numero % 2 == 0) {
        return "Par";
    }
    return "Impar";
}

function mostrarMultiplos(numInicial, numFinal, numReferencia) {
    let resultado = "";
    for (let i = numInicial; i <= numFinal; i++) {
        if (i % numReferencia == 0) {
            resultado = `${resultado}${i}<br>`;
        }
    }
    // let j=numInicial;
    // while (j<=numFinal) {
    // if (i % numReferencia == 0) {
    //     resultado = `${resultado}${i}<br>`;
    // }
    //     j++;
    // }
    return resultado;
}

function mostrarContagemRegressiva(numInicial, numFinal, passo) {
    let resultado = "";
    for (let i = numInicial; i >= numFinal; i = i - passo) {
        resultado = `${resultado}<br>${i}`;
    }
    return resultado;

    // let j=numInicial;
    // while (j>=numFinal) {
    //     resultado = `${resultado}<br>${i}`;
    //     j=j-passo;
    // }
}

function mostrarJogoPim(numFinal) {
    let resultado = "";
    let txtAcrescentar = "<br>"
    for (let i = 1; i <= numFinal; i++) {
        i == numFinal ? txtAcrescentar = "!" : "";
        if (i % 4 == 0) {
            resultado = `${resultado}PIM${txtAcrescentar}`;
        } else {
            resultado = `${resultado}${i}${txtAcrescentar}`;
        }
    }
    return resultado;
}
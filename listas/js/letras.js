const botaoSolicitarLetras = document.querySelector('#btn-pedir-letras');
const resultadoLetras = document.querySelector('#ex2');
let letras = [];

botaoSolicitarLetras.addEventListener('click', () => {
    letras = receberLetras();
    resultadoLetras.innerHTML=`Todas as letras: ${letras}`;
    console.log(`Todas as letras: ${letras}`);
    // a) A primeira letra digitada
    resultadoLetras.innerHTML=`${resultadoLetras.innerHTML}<br>A primeira letra: ${letras[0]}`;
    console.log(`A primeira letra: ${letras[0]}`);    
    // b) A quarta letra digitada
    resultadoLetras.innerHTML=`${resultadoLetras.innerHTML}<br>A quarta letra: ${letras[3]}`;
    console.log(`A quarta letra: ${letras[3]}`);    
    // c) A quinta letra digitada
    resultadoLetras.innerHTML=`${resultadoLetras.innerHTML}<br>A quinta letra: ${letras[4]}`;
    console.log(`A quinta letra: ${letras[4]}`);    
    // d) A última letra digitada
    resultadoLetras.innerHTML=`${resultadoLetras.innerHTML}<br>A última letra: ${letras[letras.length-1]}`;
    console.log(`A última letra: ${letras[letras.length-1]}`);    
    // e) O tamanho da lista criada
    resultadoLetras.innerHTML=`${resultadoLetras.innerHTML}<br>Tamanho da Lista: A lista possui ${letras.length} elementos`;
    console.log(`Tamanho da Lista:  A lista possui ${letras.length} elementos`);    
})

function receberLetras() {
    let i = 0;
    let arrayLetras = [];
    let letra = "";

    while (i < 10) {
        letra = prompt(`Digite uma letra para ocupar a posição de número ${i + 1}:`);
        if (/[A-Za-z]/.test(letra) && letra.length==1) {
            adicionarLetraParaLista(letra,arrayLetras);
            i++;
        } else {
            alert("Valor inválido! Atenção, digite apenas uma letra, sem qualquer tipo de acentuação!");
        }
    }
    return arrayLetras;
}

function adicionarLetraParaLista(letra, listaLetras){
    listaLetras.push(letra);
}

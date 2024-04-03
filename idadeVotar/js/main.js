// No Brasil, uma pessoa é obrigada a votar se tiver idade entre 18 e 70 anos. Acima de 70 anos o voto é opcional, assim como para quem tem 16 ou 17 anos. Quem ainda não completou 16 anos não pode votar. Através de estruturas condicionais, crie um programa que dirá se uma pessoa pode ou não votar, de acordo com a idade que será armazenada em uma variável.

// ■ Se desejar, você pode utilizar o prompt() e pedir para que a pessoa usuária digite uma idade!

// ■ Se precisar, revise sobre como utilizar operadores de comparação aqui.

const solucao = document.querySelector(".exercicio__solucao-txt");

let nome, idade;

solicitarDados();
solucao.innerHTML=`Olá ${nome}! Você ${verificarSePodeVotar(idade)}.`;

function verificarSePodeVotar(idade){
    let mensagem;
    if (idade<16) {
        mensagem="não pode votar";
    } else if (idade<18 || idade>70) {
        mensagem="possui o voto opcional";
    }else{
        mensagem="deve votar";
    }
    return mensagem;
}

function solicitarDados() {    
    do {
        nome = prompt("Olá, Digite seu nome:","");
        idade = prompt("Olá, Digite sua idade:","");
        if (!validarNome(nome) || !validarIdade(idade)) {
            alert("Nome ou idade inválidos! Digite os valores novamente");
        }
    } while (!validarNome(nome) || !validarIdade(idade));
}


function validarNome(nome) {
    if (nome!=null && nome.length > 2) {
        return true;
    } else {
        return false;
    }
}

function validarIdade(idade) {
    return (isNaN(idade) || idade==null) ? false : true;
}

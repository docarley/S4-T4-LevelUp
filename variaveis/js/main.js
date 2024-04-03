// 1. Crie 5 variáveis e atribua valores, respeitando os tipos de dados a serem armazenados. Em seguida, em uma variável chamada profissional, concatene as variáveis abaixo formando uma string que faça sentido com os dados informados e apresente essa variável com o método document.write() em algum arquivo.html ou utilizando o console.log().

// a. nome (string)
// b. telefone (string)
// c. se possui convênio médico ou não (booleano)
// d. profissão (string)
// e. salário (number)

let nome = "Juquinha";
let telefone = "(13)98877-7766";
let possuiConvenioMedico = true;
let profissao = "Desenvolvedor Sênior";
let salario = 7100.65;

const solucao1 = document.querySelector("#ex1");

let profissional = mostrarMensagemPrincipal(nome, telefone, possuiConvenioMedico, profissao, salario);

console.log(profissional);
solucao1.innerHTML = profissional;


function mostrarMensagemPossuiConvenio(situacaoConvenio) {
    if (situacaoConvenio) {
        return "possui convênio médico";
    } else {
        return "não possui convênio médico";
    }
}

function mostrarMensagemPrincipal(nome, telefone, possuiConvenioMedico, profissao, salario) {
    let mensagem = `Olá! ${nome} é ${profissao} e seu salário é de R$ ${salario.toString().replace(".", ",")}. Seu telefone é ${telefone} e ele ${mostrarMensagemPossuiConvenio(possuiConvenioMedico)}.`;
    return mensagem;
}

// Crie uma lógica que armazene dois números inteiros em duas variáveis. Em seguida, troque o valor dessas variáveis e exiba na tela. Por exemplo, uma variável ae outra b, em algum momento avai valer b, e bvai valer a, mas quando a = b, o valor inicial de apode ser perdido, atenção!

const solucao2 = document.querySelector("#ex2");
const btnInverterValores = document.querySelector("#btn-inverter-valores");

let txtValorA = document.querySelector("#valorA").value;
let txtValorB = document.querySelector("#valorB").value;

btnInverterValores.addEventListener('click', () => {    
    inverterValores();
    solucao2.innerHTML = mostrarValoresInvertidos();
})


function inverterValores() {
    let aux = txtValorA;
    txtValorA = txtValorB;
    txtValorB = aux;
}

function mostrarValoresInvertidos() {
    let mensagem = `O valor de A agora é ${txtValorA}, e o valor de B agora é ${txtValorB}`;
    return mensagem;
}
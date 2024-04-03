// 1. Crie 5 variáveis e atribua valores, respeitando os tipos de dados a serem armazenados. Em seguida, em uma variável chamada profissional, concatene as variáveis abaixo formando uma string que faça sentido com os dados informados e apresente essa variável com o método document.write() em algum arquivo.html ou utilizando o console.log().

// a. nome (string)
// b. telefone (string)
// c. se possui convênio médico ou não (booleano)
// d. profissão (string)
// e. salário (number)

let nome = "Juquinha";
let telefone = "(13)98877-7766";
let possuiConvenioMedico=true;
let profissao = "Desenvolvedor Sênior";
let salario=7100.65;

const solucao = document.querySelector(".exercicio__solucao-txt");

let profissional = mostrarMensagemPrincipal(nome,telefone,possuiConvenioMedico,profissao,salario);

console.log(profissional);
solucao.innerHTML=profissional;


function mostrarMensagemPossuiConvenio(situacaoConvenio){
    if (situacaoConvenio) {
        return "possui convênio médico";
    } else {
        return "não possui convênio médico";
    }
}

function mostrarMensagemPrincipal(nome, telefone, possuiConvenioMedico, profissao, salario){
    let mensagem = `Olá! ${nome} é ${profissao} e seu salário é de R$ ${salario.toString().replace(".", ",")}. Seu telefone é ${telefone} e ele ${mostrarMensagemPossuiConvenio(possuiConvenioMedico)}.`;
    return mensagem;
}
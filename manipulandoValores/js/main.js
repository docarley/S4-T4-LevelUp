const tabela = document.querySelectorAll('.exercicio__tabela tr');
let arrayClientes = [];

arrayClientes = lerTabela(tabela);
console.log(arrayClientes);

console.log(mostrarMensagemTotalClientes(arrayClientes));
console.log(calcularMediaFaturamentoPorCidade(arrayClientes));




function lerTabela(tabela) {
    let listaClientes = [];
    tabela.forEach(elementTr => {
        let listaLinhas = [];
        let listaCelulas = elementTr.children;
        for (let i = 0; i < listaCelulas.length; i++) {
            listaLinhas.push(listaCelulas[i].innerHTML);
        }
        listaClientes.push(listaLinhas);
    });
    return listaClientes;
}

function totalizarClientes(tabela) {
    let totalClientes = 0;
    let novaTabela=[...tabela];
    novaTabela.shift();//eliminando cabeçalho
    novaTabela.forEach(element => {
        element[1] = parseInt(element[1]);
        totalClientes = totalClientes + element[1];
    });
    return totalClientes;
}

function mostrarMensagemTotalClientes(tabela) {
    let cidadesClientes = "";
    let mensagem = "";
    let novaTabela=[...tabela];
    novaTabela.shift();//eliminando cabeçalho
    novaTabela.forEach(element => {
        cidadesClientes = `${cidadesClientes}${element[0]}, `;
    });
    mensagem = `Na(s) cidade(s) de ${cidadesClientes} Jéssica possui ${totalizarClientes(tabela)} clientes.`;
    return mensagem;
}

function calcularMediaFaturamentoPorCidade(tabela){
    let mensagem = "";
    let faturamento="";
    let novaTabela=[...tabela];
    novaTabela.shift();//eliminando cabeçalho
    novaTabela.forEach(element => {
        faturamento = `${faturamento}${element[0]}: R$ ${(parseInt(element[2].replace('R$ ',''))/parseInt(element[1])).toFixed(2)}<br>`;
    });
    mensagem = `Faturamento médio por cidade:<br>${faturamento}`;
    return mensagem;
}




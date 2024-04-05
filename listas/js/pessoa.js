const resultadoPessoa = document.querySelector('#ex1');
let pessoa=[];

pessoa.push('Juquinha Siva');
pessoa.push(40);
pessoa.push('444.555.555-11');
pessoa.push(1.77);
pessoa.push(true);

resultadoPessoa.innerHTML=mostrarDadosPessoa(pessoa);


function mostrarDadosPessoa(pessoa){
    let labels=['Nome','Idade','CPF','Altura','Maior de Idade'];
    let dadosPessoa="";

    for (let i = 0; i < pessoa.length; i++) {
        if (labels[i]=='Maior de Idade') {
            pessoa[i]=mostrarTextoMaiorDeIdade(pessoa[i]);
        }
        dadosPessoa=`${dadosPessoa}${labels[i]}: ${pessoa[i]}<br>`;        
    }   
    return dadosPessoa;
}

function mostrarTextoMaiorDeIdade(valor){
    return valor ? "Sim" : "Não";
}



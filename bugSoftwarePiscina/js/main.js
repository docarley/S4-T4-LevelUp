const valorRaio = document.querySelector('#valorRaio');
const valorAltura = document.querySelector('#valorAltura');
const resultadoVolume = document.querySelector('.exercicio__solucao-txt');
const botaoCalcularVolume = document.querySelector('#btn-calcular-volume');

botaoCalcularVolume.addEventListener('click', () => {
    let raio = parseFloat(valorRaio.value.replace(",", "."));
    let altura = parseFloat(valorAltura.value.replace(",", "."));
console.log(raio);
console.log(altura);
    

    if (validarEntradas(raio) && validarEntradas(altura)) {
        let area = calcularAreaCirculo(raio);
        let volume = calcularVolumeCilindro(area, altura);
        resultadoVolume.innerHTML=`${volume.toFixed(2)} Litros`;
    } else{
        resultadoVolume.innerHTML="Valores Invalidos!!! Digite apenas números";
    }
})


function calcularVolumeCilindro(areaBaseMetros, alturaMetros) {
    return areaBaseMetros * alturaMetros;
}

function calcularAreaCirculo(raioMetros) {
    return Math.PI * raioMetros ** 2;
}

function validarEntradas(valor) {
    return (!isNaN(valor) && valor>0) ? true : false;
}

function limparCampos(){
    valorRaio.value="";
    valorAltura.value="";
}
function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMedia(valor1, valor2){
    //1. Soma de dois valores
    const resultadoDaSomaDeDoisValores = somarDoisNumeros(valor1,valor2);

    //2. Divide pela quantidade de numeros passados
    const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;

    //3. Retornar o resultado
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros
}
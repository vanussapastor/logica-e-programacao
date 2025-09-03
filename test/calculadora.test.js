// Programação é sobre padrões, logo o método de importação é igual para exportação de funções
const {somarDoisNumeros} = require('../src/calculadora');
const {expect} = require('chai');

describe('Testes da Função de Soma', function(){
    it('A função deve ser capaz de somar dois números positivos', function(){
        //Primeiro coleta o resultada da função
        const resultadoDaSoma = somarDoisNumeros(5,3);

        //Comparar o resultado com o valor esperado
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um número negativo', function(){
        //Primeiro coleta o resultada da função
        const resultadoDaSoma = somarDoisNumeros(50,-15);

        //Comparar o resultado com o valor esperado
        expect(resultadoDaSoma).to.equal(35);

    });

    it('A função deve ser capaz de somar dois números negativos', function(){
        //Primeiro coleta o resultada da função
        const resultadoDaSoma = somarDoisNumeros(-50,-15);
        
        //Comparar o resultado com o valor esperado
        expect(resultadoDaSoma).to.equal(-65);
    });
    
});
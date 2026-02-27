/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável de armazenar as funções para o cálculo das médias escolares
* Data: 27/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

// Função para calcular a média escolar
const calcularMedia = function (nota1Tratada, nota2Tratada, nota3Tratada, nota4Tratada) {
    let media = (nota1Tratada + nota2Tratada + nota3Tratada + nota4Tratada) / 4

    if(media >= 70) {
        return {
            valor: Number(media).toFixed(2),
            status: 'Aprovado' 
        }
    } else if(media < 50) {
        return {
            valor: Number(media).toFixed(2),
            status: 'Reprovado'
        }
    } else {
        return {
            valor: Number(media).toFixed(2),
            status: 'Exame'
        }
    }
}

const calcularMediaExame = function (media, notaExameTratada) {
    let valorMediaAnterior = Number(media.valor); 

    let mediaExame = (valorMediaAnterior + notaExameTratada) / 2;

    if(mediaExame >= 60) {
        return {
            valor: Number(mediaExame).toFixed(2),
            status: 'Aprovado'
        }
    } else {
        return {
            valor: Number(mediaExame).toFixed(2),
            status: 'Reprovado'
        }
    }
}

module.exports = {
    calcularMedia,
    calcularMediaExame
}
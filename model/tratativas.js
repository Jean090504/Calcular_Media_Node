/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável de armazenar as tratativas de erros para o cálculo das médias escolares
* Data: 27/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/
// Função para validar os dados de entrada

const validarEntrada = function (nomeAlunoTratado, nomeProfessorTratado, sexoAlunoTratado, sexoProfessorTratado, nomeCursoTratado, nomeDisciplinaTratado, nota1Tratada, nota2Tratada, nota3Tratada, nota4Tratada) {
    nomeAlunoTratado = String(nomeAlunoTratado).charAt(0).toUpperCase() + String(nomeAlunoTratado).slice(1).toLowerCase();
    nomeProfessorTratado = String(nomeProfessorTratado).charAt(0).toUpperCase() + String(nomeProfessorTratado).slice(1).toLowerCase();
    sexoAlunoTratado = String(sexoAlunoTratado).charAt(0).toUpperCase() + String(sexoAlunoTratado).slice(1).toLowerCase();
    sexoProfessorTratado = String(sexoProfessorTratado).charAt(0).toUpperCase() + String(sexoProfessorTratado).slice(1).toLowerCase();
    nomeCursoTratado = String(nomeCursoTratado).charAt(0).toUpperCase() + String(nomeCursoTratado).slice(1).toLowerCase();
    nomeDisciplinaTratado = String(nomeDisciplinaTratado).charAt(0).toUpperCase() + String(nomeDisciplinaTratado).slice(1).toLowerCase();
    nota1Tratada = Number(nota1Tratada)
    nota2Tratada = Number(nota2Tratada)
    nota3Tratada = Number(nota3Tratada)
    nota4Tratada = Number(nota4Tratada)

    if(!isNaN(nomeAlunoTratado) || nomeAlunoTratado == '') {
        return 'Erro: Digite um nome válido.'
    }else if(!isNaN(nomeProfessorTratado) || nomeProfessorTratado == '') {
        return 'Erro: Digite um nome válido.'
    }else if(sexoProfessorTratado != 'Masculino' && sexoProfessorTratado != 'Feminino') {
        return 'Erro: Digite um sexo válido (Masculino ou Feminino).'
    }else if(sexoAlunoTratado != 'Masculino' && sexoAlunoTratado != 'Feminino') {
        return 'Erro: Digite um sexo válido (Masculino ou Feminino).'
    }else if(!isNaN(nomeCursoTratado) || nomeCursoTratado == '') {
        return 'Erro: Digite um nome de curso válido.'
    }else if(!isNaN(nomeDisciplinaTratado) || nomeDisciplinaTratado == '') {
        return 'Erro: Digite um nome de disciplina válido.'
    }else if(isNaN(nota1Tratada) || isNaN(nota2Tratada) || isNaN(nota3Tratada) || isNaN(nota4Tratada) || nota1Tratada < 0 || nota1Tratada > 100 || 
    nota2Tratada < 0 || nota2Tratada > 100 || nota3Tratada < 0 || nota3Tratada > 100 || nota4Tratada < 0 || nota4Tratada > 100) {
        return 'Erro: Digite uma nota válida (entre 0 e 100).'
    }else{
        return true
    }

}

const validarEntradaExame = function (notaExameTratada) {
    notaExameTratada = Number(notaExameTratada)

    if(isNaN(notaExameTratada) || notaExameTratada < 0 || notaExameTratada > 100) {
        return 'Erro: Digite uma nota válida (entre 0 e 100).'
    }else{
        return true
    }
}

const validandoSexo = function (sexoAlunoTratado,sexoProfessorTratado) {
    if(sexoAlunoTratado == 'Masculino') {
        sexoAlunoTratado = 'o aluno'
    }else if(sexoAlunoTratado == 'Feminino') {
        sexoAlunoTratado = 'a aluna'
    }

    if(sexoProfessorTratado == 'Masculino') {
        sexoProfessorTratado = 'o professor'
    }else if(sexoProfessorTratado == 'Feminino') {
        sexoProfessorTratado = 'a professora'
    }
}

module.exports = {
    validarEntrada,
    validarEntradaExame,
    validandoSexo
}



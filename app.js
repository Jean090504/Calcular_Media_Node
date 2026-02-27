/*******************************************************************************************************************************************
* Objetivo: Desenvolver uma aplicação para o médias escolares 
* Data: 27/02/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Importe da biblioteca para entrada de dados
const { error } = require('console')
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno: ', function (nomeAluno) {
    let nomeAlunoTratado = nomeAluno

    entradaDados.question('Digite o nome do professor: ', function (nomeProfessor) {
        let nomeProfessorTratado = nomeProfessor

        entradaDados.question('Digite o sexo do aluno (Masculino ou Feminino): ', function (sexoAluno) {
            let sexoAlunoTratado = sexoAluno

            entradaDados.question('Digite o sexo do professor (Masculino ou Feminino): ', function (sexoProfessor) {
                let sexoProfessorTratado = sexoProfessor

                entradaDados.question('Digite o nome do curso: ', function (nomeCurso) {
                    let nomeCursoTratado = nomeCurso

                    entradaDados.question('Digite o nome da disciplina: ', function (nomeDisciplina) {
                    let nomeDisciplinaTratado = nomeDisciplina

                        entradaDados.question('Digite a nota 1: ', function (nota1) {
                            let nota1Tratada = Number(nota1)

                            entradaDados.question('Digite a nota 2: ', function (nota2) {
                                let nota2Tratada = Number(nota2)

                                entradaDados.question('Digite a nota 3: ', function (nota3) {
                                    let nota3Tratada = Number(nota3)

                                    entradaDados.question('Digite a nota 4: ', function (nota4) {
                                        let nota4Tratada = Number(nota4)

                                        //Importe do arquivo de tratativas de erros
                                        const tratativas = require('./model/tratativas')
                                        let validar = tratativas.validarEntrada(nomeAlunoTratado, nomeProfessorTratado, sexoAlunoTratado, sexoProfessorTratado, nomeCursoTratado, nomeDisciplinaTratado, nota1Tratada, nota2Tratada, nota3Tratada, nota4Tratada)

                                        if(validar !== true){
                                            console.log(validar)
                                            entradaDados.close()
                                            return 'ERRO: Entrada de dados inválida. Por favor, tente novamente.'
                                        }

                                        // Importação do arquivo de cálculos
                                        const calculos = require('./model/calculos')

                                        // Chamada da função calcularMedia
                                        let media = calculos.calcularMedia(nota1Tratada, nota2Tratada, nota3Tratada, nota4Tratada)

                                        //Chamada da função validandoSexo para ajustar os títulos de acordo com o sexo do aluno e do professor, e o status da média
                                        let titulos = tratativas.validandoSexo(sexoAlunoTratado, sexoProfessorTratado, media.status)

                                        // Acessando as propriedades do objeto retornado
                                        if (media.status === 'Aprovado') {
                                            console.log(`
                                            ******************************       Relatório do aluno       ************************************************** 
                                            *****  ${titulos.aluno}: [ ${nomeAlunoTratado} ] foi [ ${media.status} ] na disciplina [ ${nomeDisciplinaTratado} ]. 
                                            *****  Curso: ${nomeCursoTratado} 
                                            *****  ${titulos.professor}: ${nomeProfessorTratado} 
                                            *****  ${titulos.notas}: ${nota1Tratada}, ${nota2Tratada}, ${nota3Tratada}, ${nota4Tratada}
                                            *****  Média Final: [ ${titulos.status} ] com média ${media.valor}
                                            ****************************************************************************************************************`)
                                            entradaDados.close()
                                        } else if (media.status === 'Reprovado') {
                                            console.log(`
                                                ******************************       Relatório do aluno       ************************************************** 
                                                *****  ${titulos.aluno}: [ ${nomeAlunoTratado} ] foi [ ${media.status} ] na disciplina [ ${nomeDisciplinaTratado} ]. 
                                                *****  Curso: ${nomeCursoTratado} 
                                                *****  ${titulos.professor}: ${nomeProfessorTratado} 
                                                *****  ${titulos.notas}: ${nota1Tratada}, ${nota2Tratada}, ${nota3Tratada}, ${nota4Tratada}
                                                *****  Média Final: [ ${titulos.status} ] com média ${media.valor}
                                                ****************************************************************************************************************`)
                                            entradaDados.close()
                                        } else if (media.status === 'Exame') {
                                            entradaDados.question('Digite a nota do exame: ', function (notaExame) {
                                                let notaExameTratada = Number(notaExame)

                                                // Validação da nota do exame
                                                const tratativasExame = require('./model/tratativas');
                                                let validarExame = tratativasExame.validarEntradaExame(notaExameTratada)

                                                if (validarExame !== true) {
                                                    console.log(validarExame)
                                                    entradaDados.close()
                                                    return 'ERRO: Entrada de dados inválida. Por favor, tente novamente.'
                                                }

                                                // Cálculo da média do exame
                                                let mediaExame = calculos.calcularMediaExame(media, notaExameTratada)

                                                if (media.status === 'Aprovado' || media.status === 'Reprovado') {
                                                    console.log(`
                                                    ******************************       Relatório do aluno       ************************************************** 
                                                    *****  ${titulos.aluno}: [ ${nomeAlunoTratado} ] foi [ ${media.status} ] na disciplina [ ${nomeDisciplinaTratado} ]. 
                                                    *****  Curso: ${nomeCursoTratado} 
                                                    *****  ${titulos.professor}: ${nomeProfessorTratado} 
                                                    *****  ${titulos.notas}: ${nota1Tratada}, ${nota2Tratada}, ${nota3Tratada}, ${nota4Tratada}, Exame: ${notaExameTratada}
                                                    *****  Média Final:[ ${titulos.status}} ] com média do exame ${mediaExame.valor} 
                                                    ****************************************************************************************************************`)
                                                }else {
                                                    console.log(`
                                                    ******************************       Relatório do aluno       ************************************************** 
                                                    *****  ${titulos.aluno}: [ ${nomeAlunoTratado} ] foi [ ${media.status} ] na disciplina [ ${nomeDisciplinaTratado} ]. 
                                                    *****  Curso: ${nomeCursoTratado} 
                                                    *****  ${titulos.professor}: ${nomeProfessorTratado} 
                                                    *****  ${titulos.notas}: ${nota1Tratada}, ${nota2Tratada}, ${nota3Tratada}, ${nota4Tratada}, Exame: ${notaExameTratada}
                                                    *****  Média Final:[ ${titulos.status}} ] com média do exame ${mediaExame.valor} 
                                                    ****************************************************************************************************************`)
                                                }
                                                entradaDados.close()
                                            })
                                        } else {
                                            console.log('Erro: Situação da média escolar inválida.')
                                            entradaDados.close()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


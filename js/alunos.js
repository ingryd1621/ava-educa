import { alunos } from "../dados/listagem-alunos.js";

export function cadastrarAluno(aluno) {
    return new Promise ((resolve, reject) => {
        try {
            aluno.id = alunos.length + 1;
            alunos.push(aluno);
            //console.log(alunos);  //teste
            resolve("Aluno cadastrado com sucesso!");
        } catch (erro) {
            reject("Erro ao cadastrar o aluno");
        }
    })
}
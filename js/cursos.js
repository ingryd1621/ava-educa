import { cursos } from "../dados/listagem-cursos.js";

export function listarCursos(usuario) {
    return new Promise((resolve, reject) => {
        const cursosEncontrados = cursos.filter((curso) => {
            if (curso.emailProfessor === usuario.email) {
                return curso;
            }
        });
        if (cursosEncontrados.length > 0) {
            resolve(cursosEncontrados);
        } else {
            reject("Não há cursos cadastrados para esse usuário");
        }
    });
}
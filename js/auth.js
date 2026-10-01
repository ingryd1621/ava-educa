import { usuarios } from "../dados/listagem-usuarios.js";

export function login(usuario, senha) {
    return new Promise((resolve, reject) => {
        const usuarioEncontrado = usuarios.find((usuarioLista) => {
            if (usuarioLista.email === usuario && usuarioLista.senha === senha) {
                return usuarioLista;
            }
        });
        if (usuarioEncontrado) {
            resolve(usuarioEncontrado);
        } else {
            reject("Dados incorretos. Favor verificar e tentar novamente");
        }
    });
}
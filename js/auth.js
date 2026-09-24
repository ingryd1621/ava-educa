import { usuarios } from "../dados/listagem-usuarios.js";

export function login(usuario, senha) {
    const usuarioEncontrado = usuarios.find((usuarioLista) => {
        if (usuarioLista.email === usuario && usuarioLista.senha === senha){
            return usuarioLista;
        }
    });
    return usuarioEncontrado;
}
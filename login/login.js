const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const btnEntrar = document.getElementById("btnEntrar");
const mostrarSenha = document.getElementById("mostrarSenha");
const recuperarSenha = document.getElementById("recuperarSenha");

function validarCampos() {
    if (usuario.value !== "" && senha.value !== "") {
        btnEntrar.disabled = false;
    } else {
        btnEntrar.disabled = true;
    }
}

usuario.onchange = validarCampos;
senha.onchange = validarCampos;

mostrarSenha.addEventListener("change", function () {
    if (mostrarSenha.checked) {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
});

recuperarSenha.addEventListener("click", function () {
    window.alert("A funcionalidade de recuperação de senha está em construção.");
});

import { login } from "../js/auth.js";

btnEntrar.addEventListener("click", function(){
    const usuarioEncontrado = login(usuario.value, senha.value);
    if (usuarioEncontrado){
        sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
        window.location.href = "../dashboard/dashboard.html";
    } else {
        window.alert("Usuário ou senha inválidos!");
    }
})
const usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"));
const nomeUsuario = document.querySelector("#usuarioLogado");
const btnSair = document.querySelector("#btnSair");


nomeUsuario.textContent = usuarioLogado.nome;

btnSair.addEventListener("click", ()=>{
    sessionStorage.removeItem("usuario");
    window.location.href = "../login/login.html";
})

import { Aluno } from "../js/Aluno.js";
import { cadastrarAluno } from "../js/alunos.js";

const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const genero = document.querySelector("#genero");
const dataNascimento = document.querySelector("#dataNascimento");
const cpf = document.querySelector("#cpf");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const cep = document.querySelector("#cep");
const logradouro = document.querySelector("#logradouro");
const numero = document.querySelector("#numero");
const bairro = document.querySelector("#bairro");
const complemento = document.querySelector("#complemento");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

cep.addEventListener("blur", () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.erro) {
                window.alert("CEP não encontrado!");
                return;
            }
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            estado.value = dados.uf;
        })
        .catch(() => {
            window.alert("Erro ao buscar o CEP!");
        });
});

function validarDataNascimento(data) {
    const nascimento = moment(data);
    const dataMinima = moment("1900-01-01");
    const dataAtual = moment();
    return nascimento.isAfter(dataMinima) && nascimento.isBefore(dataAtual);
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validarDataNascimento(dataNascimento.value)) {
        window.alert("Data de nascimento inválida!");
        return;
    }
    const novoAluno = new Aluno(
        nome.value,
        genero.value,
        dataNascimento.value,
        cpf.value,
        telefone.value,
        email.value,
        cep.value,
        cidade.value,
        estado.value,
        logradouro.value,
        numero.value,
        complemento.value,
        bairro.value
    );

    cadastrarAluno(novoAluno)
        .then((mensagem) => {
            window.alert(mensagem);
            formulario.reset();
        })
        .catch((erro) => {
            window.alert(erro);
        });
});
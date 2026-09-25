import { listarCursos } from "../js/cursos.js";
const cardsCursos = document.querySelector("#cardsCursos");
const usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"));
const nomeUsuario = document.querySelector("#usuarioLogado");
const btnSair = document.querySelector("#btnSair");

nomeUsuario.textContent = usuarioLogado.nome;

function formatarData(data) {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

listarCursos(usuarioLogado)
    .then((cursos) => {
        cursos.forEach((curso) => {
            const card = `
                <article class="card-curso">
                    <h3>${curso.nomeCurso}</h3>
                    <p>Data de início: ${formatarData(curso.dataInicio)}</p>
                    <p>Data de fim: ${formatarData(curso.dataFim)}</p>
                </article>
            `;
            cardsCursos.innerHTML += card;
        });
    })
    .catch((erro) => {
    cardsCursos.innerHTML = `
        <p class="mensagem-sem-cursos">${erro}</p>
    `;
});

btnSair.addEventListener("click", ()=>{
    sessionStorage.removeItem("usuario");
    window.location.href = "../login/login.html";
})

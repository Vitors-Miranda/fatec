const DisciplinaLink = "http://localhost/fatec/public_html/api/disciplina"

function requestCadastrarDisciplinas(dados, metodo, funcao) {
    fetch(DisciplinaLink,{
        method: metodo,
        body: dados
    }).then(responseCadDisciplinas => responseCadDisciplinas.json()).then(
        (retorno) => {
            funcao(retorno)
        }
    )
}

const formCadastroDisciplina = document.getElementById("formCadastroDisciplina")

formCadastroDisciplina.addEventListener("submit", e => {
    e.preventDefault()
    dados = new FormData(formCadastroDisciplina)
    requestCadastrarDisciplinas(dados, "POST", returned =>{
        console.log(returned)
        listarDisciplinas()
    })
})
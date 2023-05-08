const cursoLink = "http://localhost/fatec/public_html/api/cursos"

function requestCadastrarCursos(dados, metodo, funcao) {
    fetch(cursoLink,{
        method: metodo,
        body: dados
    }).then(responseCadCursos => responseCadCursos.json()).then(
        (retorno) => {
            funcao(retorno)
        }
    )
}

const formCadastroCurso = document.getElementById("formCadastroCurso")

formCadastroCurso.addEventListener("submit", e => {
    e.preventDefault()
    dados = new FormData(formCadastroCurso)

    disciplinasArray = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        disciplinasArray.push(checkboxes[i].value);
        dados.append('disciplinas[]', disciplinasArray[i]);
    }
    requestCadastrarCursos(dados, "POST", returned =>{
        console.log(returned)
        formCadastroCurso.reset()
        listarR()
        listar()
    })
})


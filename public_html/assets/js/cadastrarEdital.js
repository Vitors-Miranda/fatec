const editalLink = "http://localhost/fatec/public_html/api/edital"

function requestCadastrarEdital(dados, metodo, funcao) {
    fetch(editalLink,{
        method: metodo,
        body: dados
    }).then(responseCad => responseCad.json()).then(
        (retorno) => {
            funcao(retorno)
        }
    )
}

const formCadastroEditas = document.getElementById("formCadastroEdital")

formCadastroEditas.addEventListener("submit", e => {
    e.preventDefault()
    dados = new FormData(formCadastroEditas)
    requestCadastrarEdital(dados, "POST", returned =>{
        console.log(returned)
        listarEdital()
    })
})
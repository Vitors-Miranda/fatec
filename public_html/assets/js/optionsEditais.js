const cursoLink = "http://localhost/fatec/public_html/api/cursos"

function listarCurso(dados, metodo, funcao){
    fetch(cursoLink, {
        method: metodo,
        body: dados
    }).then(resposta => resposta.json()).then(
        (retorno) =>{
            funcao(retorno)
        }
    )
}

const selectSystem = document.getElementById("curso")
document.addEventListener("DOMContentLoaded", ()=>{
    listarSelect()
})  

function listarSelect(){
    selectSystem.innerHTML=""
        listarCurso(null, "GET", (retorno) => {
            retorno.data.forEach(element => {
                selectSystem.innerHTML+=`<option value="${element.id_curso}">
                ${element.nome}
                </option>`
            }
        )}
    )
}
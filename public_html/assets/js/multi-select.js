const DisciplinaLink = "http://localhost/fatec/public_html/api/disciplina"
function listarDisciplina(dados, metodo, funcao){
    fetch(DisciplinaLink, {
        method: metodo,
        body: dados
    }).then(resposta => resposta.json()).then(
        (retorno) =>{
            funcao(retorno)
        }
    )
}

const selectMultiple = document.getElementById("checkGroup")
document.addEventListener("DOMContentLoaded", ()=>{
    listarMultiSelect()
}) 

function listarMultiSelect(){
    selectMultiple.innerHTML=""
    let cont = 0
        listarDisciplina(null, "GET", (retorno) => {
            retorno.data.forEach(element => {
                selectMultiple.innerHTML += `<div class='disciplinas_div'>
                    <input class="form-check-input" type="checkbox" value="${element.id_disciplina}" id="disciplina_${cont}">
                    
                    <label class="form-check-label" for="flexCheckDefault">
                    ${element.nome}
                    </label>
                </div>`
                cont++
            }
        )}
    )
}
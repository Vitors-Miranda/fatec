const cursoRecenteLink = "http://localhost/fatec/public_html/api/recente"


function listarCursoR(dados, metodo, funcao){
    fetch(cursoRecenteLink, {
        method: metodo,
        body: dados
    }).then(resposta => resposta.json()).then(
        (retorno) =>{
            funcao(retorno)
        }
    )
}

const cardsR= document.getElementById("cursosCards")
document.addEventListener("DOMContentLoaded", ()=>{
    listarR()
})  


function listarR(){
    cardsR.innerHTML=""
        listarCursoR(null, "GET", (retorno) => {
            retorno.data.forEach(element => {
                let caminho = element.caminho.split("/")
                caminho = `${caminho[3]}/${caminho[4]}`
                if(caminho != "undefined/undefined")
                    imagem = `<img src="${caminho}" class="card-title rounded" width="100px">`
                else
                    imagem = ""
                cardsR.innerHTML+=`  <div class="card col-md-3 col-1  col-sm-2 text-center">
                <div class="card-body">
                <input type="hidden" value="${element.id_curso}" />
                ${imagem}
                  <h5 class="card-title">${element.sigla}</h5>
                  <p class="card-text">${element.nome}</p>
                </div>
              </div>`
            }
        )}
    )
}
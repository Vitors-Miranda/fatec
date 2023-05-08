
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

const cards= document.getElementById("todosC")
document.addEventListener("DOMContentLoaded", ()=>{
    listar()
})  

function listar(){
    cards.innerHTML=""
        listarCurso(null, "GET", (retorno) => {
            retorno.data.forEach(element => {
                let caminho = element.caminho.split("/")
                caminho = `${caminho[3]}/${caminho[4]}`
                

                cards.innerHTML+=` <div class="cards col-md-3 d-flex align-items-center text-center rounded">
                <div class="card-body ">
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

var btnRight = body.querySelector("#btnRight"),
btnLeft = body.querySelector("#btnLeft"),
Row = body.querySelector("#row1"),
todosCursos = body.querySelector("#todosCursos"),
mleft


btnRight.addEventListener("click", () =>{
    slider(cardsR, -200)
})

btnLeft.addEventListener("click", ()=>{
    slider(cardsR, 200)
})
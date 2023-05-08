
function listarEditais(dados, metodo, funcao){
    fetch(editalLink, {
        method: metodo,
        body: dados
    }).then(resposta => resposta.json()).then(
        (retorno) =>{
            funcao(retorno)
        }
    )
}

const Ecards= document.getElementById("editaisCard")
document.addEventListener("DOMContentLoaded", ()=>{
    listarEdital()
})  

function listarEdital(){
    Ecards.innerHTML=""
        listarEditais(null, "GET", (retorno) => {
            console.log(retorno)
            retorno.data.forEach(element => {
                let caminho = element.caminho.split("/")
                caminho = `${caminho[3]}/${caminho[4]}`
                if(caminho != "undefined/undefined")
                    imagem = `<img src="${caminho}" class="card-title rounded" width="100px">`
                else
                    imagem = ""

                Ecards.innerHTML+=` <div class="card col-md-3 col-1  col-sm-2 text-center">
                <div class="card-body">
                  ${imagem}
                  <p class="card-text">${element.nome}</p>
                </div>
              </div>`
            }
        )}
    )
}

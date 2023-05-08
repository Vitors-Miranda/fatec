const editalLink = "http://localhost/fatec/public_html/api/edital"

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

const Ecards= document.getElementById("insertCursos")
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

                Ecards.innerHTML+=` 
                <div class="p-0 h-100 apresentacao_cursos rounded d-flex flex-column align-items-center justify-content-end" 
                style=" background-image: url(${caminho}); 
                background-size: cover;
                background-position: center;
                opacity: 0.7;
                ">
                <span class="d-flex flex-column align-items-center justify-content-center text-center text-white" 
                style="backdrop-filter: blur(10px); 
                z-index: -1;
                height:100%; 
                width: 100%;">
                ${element.nome}
                </span>        
                </div>
                `
            }
        )}
    )
}

btnRight.addEventListener("click", () =>{
    slider(Ecards, -200)
})

btnLeft.addEventListener("click", ()=>{
    slider(Ecards, 200)
})
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

const tableD= document.getElementById("tDisciplina")
document.addEventListener("DOMContentLoaded", ()=>{
    listarDisciplinas()
})  
function listarDisciplinas(){
    tableD.innerHTML=""
    
        listarDisciplina(null, "GET", (retorno) => {
            retorno.data.forEach(element => {   
                dia =  element.dia_semana == 1 ? dia = "Segunda" 
                : element.dia_semana == 2 ? dia = "Terça"
                : element.dia_semana == 3 ? dia = "Quarta"
                : element.dia_semana == 4 ? dia = "Quinta"
                : element.dia_semana == 5 ? dia = "Sexta"
                : element.dia_semana == 6 ? dia = "Sabado"
                : dia = "Domingo";
                
                tableD.innerHTML+=`<tr class="shadow-sm">
                <td> ${element.nome} </td>
                <td> ${element.descricao} </td>
                <td> ${dia} e ${element.horarios} </td>
              </tr>`
            }
        )}
    )
}

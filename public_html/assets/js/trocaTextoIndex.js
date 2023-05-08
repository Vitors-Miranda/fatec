const vestibular = document.getElementById("vestibulartxt"),
documentos = document.getElementById("documentostxt"),
contato = document.getElementById("contatotxt"),
txtTitle = document.getElementById("txtTitle")

let text, textNumber = 1


function trocaTexto(caso){
    switch (caso) {
        case 1:
            text =  "Os documentos disponibilizados pela Fatec são 100% digitais. Com a proposta de economia e tecnologia, todos os documentos podem ser pedidos e recebidos através do site e e-mail institucional"
            break;
        case 2:
            text =  "E-mail:  f132.contato@fatec.sp.gov.br <br>  Whatsapp: (15) 3205-7782"
            break;
        default:

            text = "O ingresso nas unidades do Centro Paula Souza se dá através de processos seletivos (vestibular), na Fatec Tatuí, semestralmente, são oferecidas 360 vagas.";
            break;
    }
    txtTitle.style.animation = ""

    setTimeout(() => {
        txtTitle.style.animation = "aparecer 2s"
        return txtTitle.innerHTML = text;
    }, 5)
}

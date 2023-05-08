<?php

$rota = $_GET['url'] ?? 'fatec';

$rotas = [
    "editais" => "cadastroEditais",
    "disciplinas" => "cadastroDisciplinas",
    "cursos" => "cadastroCursos",
    "fatec" => "index"
];

if(isset($rotas[$rota]) && file_exists("public_html/pages/$rotas[$rota].html"))
    include "public_html/pages/$rotas[$rota].html";
else 
    include "public_html/pages/erro.html";

    
?>
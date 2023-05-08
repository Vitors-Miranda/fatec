<?php
namespace App\Models;

class Disciplina
{
    public static function insert($dados){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

        $sql = "INSERT INTO TB_disciplina VALUES(0, :siga, :nome, :categoria, :semana, :horario, :ementa)";

        $stmt = $connPDO->prepare($sql);
        
        $stmt->bindValue(":siga", $dados["siga"]);
        $stmt->bindValue(":nome", $dados["nome"]);
        $stmt->bindValue(":categoria", $dados["descricao"]);
        $stmt->bindValue(":semana", $dados["semana"]);
        $stmt->bindValue(":horario", $dados["horario"]);
        $stmt->bindValue(":ementa", $dados["ementa"]);

        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            return "Disciplina cadastrado com sucesso";
        } else {
            throw new \Exception("Falha ao inserir um Curso");
        }

    }
    public static function select(){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);
        
        $sql = "SELECT * FROM TB_disciplina";
        $stmt = $connPDO->query($sql);
        $Cursos = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $Cursos;
    }
}
<?php
namespace App\Models;

class Edital
{
    public static function insert($dados){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

        $sql = "INSERT INTO TB_edital VALUES(0, :inscricao, :classificacao, :interposicao, :analise, :respostaF, :curso)";

        $stmt = $connPDO->prepare($sql);

        $stmt->bindValue(":inscricao",$dados["inscricao"]);
        $stmt->bindValue(":classificacao",$dados["classificacao"]);
        $stmt->bindValue(":interposicao",$dados["interposicao"]);
        $stmt->bindValue(":analise",$dados["analise"]);
        $stmt->bindValue(":respostaF",$dados["respostaF"]);
        $stmt->bindValue(":curso",$dados["curso"]);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            return "Edital cadastrado com sucesso";
        } else {
            throw new \Exception("Falha ao inserir um Edital");
        }
    }
    public static function select(){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);
        
        $sql = "SELECT caminho,  curso.nome FROM 
            TB_edital edital
        INNER JOIN 
            tb_curso curso
        ON
            edital.FK_id_curso = curso.id_curso
        INNER JOIN 
            tb_disciplina_curso dc
        ON
            curso.id_curso = dc.FK_id_curso
        INNER JOIN
            tb_disciplina disciplina
        ON
            dc.FK_id_disciplina = disciplina.id_disciplina";
        $stmt = $connPDO->query($sql);
        $Cursos = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $Cursos;
    }
    // public static function select2(){
    //     $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

    //     $sql = "SELECT * FROM TB_curso WHERE id_curso = ";
    //     $stmt = $connPDO->query($sql);
    //     $Curso = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    //     return $Curso;

    // }
}


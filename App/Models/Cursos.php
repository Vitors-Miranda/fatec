<?php
namespace App\Models;

use App\Models\Uploader;

class Cursos
{
    public static function insert($dados){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

        if (!empty($_FILES['img'])) {
            $upload = new Uploader($_FILES['img'], 600, 400, __DIR__ . "/../../img/");
            $caminho = $upload->salvar();
        }

        $sql = "INSERT INTO TB_curso VALUES(0, :sigla, :nome, :turno, :categoria, :modalidade, :inicio, :quantidade, :periocidade, :objetivo, '$caminho')";

        $stmt = $connPDO->prepare($sql);
        $stmt->bindValue(":sigla",$dados["sigla"]);
        $stmt->bindValue(":nome",$dados["nome"]);
        $stmt->bindValue(":turno",$dados["turno"]);
        $stmt->bindValue(":categoria",$dados["categoria"]);
        $stmt->bindValue(":modalidade",$dados["modalidade"]);
        $stmt->bindValue(":inicio",$dados["inicio"]);
        $stmt->bindValue(":quantidade",$dados["quantidade"]);
        $stmt->bindValue(":periocidade",$dados["periocidade"]);
        $stmt->bindValue(":objetivo",$dados["objetivo"]);
        $stmt->execute();

        $id = $connPDO->lastInsertId();
        foreach($dados["disciplinas"] as $data){
            
            $sqls = "INSERT INTO TB_disciplina_curso VALUES(0, :id_curso, :id_disciplina)";
            $stmr = $connPDO->prepare($sqls);
            $stmr->bindValue(":id_curso",$id);
            $stmr->bindValue(":id_disciplina",$data);
            $stmr->execute();

        }
        if ($stmt->rowCount() > 0) {
            return "Curso cadastrados com sucesso :D";
        } else {
            throw new \Exception("Falha ao inserir um Curso");
        }
        $connPDO=null;
    }
    public static function select(){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

        $sql = "SELECT * FROM TB_curso";
        $stmt = $connPDO->query($sql);
        $Cursos = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $Cursos;
    }
    public static function selectByName($name){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

        $sql = "SELECT * FROM TB_curso WHERE nome = '$name%' OR sigla LIKE '$name%'";
        $stmt = $connPDO->query($sql);
        $Cursos = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $Cursos;
    }
}
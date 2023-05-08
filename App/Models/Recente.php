<?php
namespace App\Models;

class Recente
{
    public static function select(){
        $connPDO = new \PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME,DBUSER,DBPASS);

        $sql = "SELECT * FROM TB_curso ORDER BY id_curso DESC LIMIT 4";
        $stmt = $connPDO->prepare($sql);
        $stmt->execute();
        $Cursos = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $Cursos;
    }
}
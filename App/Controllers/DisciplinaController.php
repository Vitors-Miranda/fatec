<?php

namespace App\Controllers;

use App\Models\Disciplina;

class DisciplinaController{
    public function post(){
        return Disciplina::insert($_POST);
    }
    public function get(){
        return Disciplina::select();
    }
}
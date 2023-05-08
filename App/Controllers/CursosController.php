<?php

namespace App\Controllers;

use App\Models\Cursos;

class CursosController{
    public function post(){
        return Cursos::insert($_POST);
    }
    public function get(){
        return Cursos::select($_GET);
    }
}
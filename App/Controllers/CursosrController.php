<?php

namespace App\Controllers;

use App\Models\Cursosr;

class CursosrController{
    public function get(){
        return Cursosr::select($_GET);
    }
}
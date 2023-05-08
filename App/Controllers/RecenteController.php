<?php

namespace App\Controllers;

use App\Models\Recente;

class RecenteController{
    public function get(){
        return Recente::select($_GET);
    }
}
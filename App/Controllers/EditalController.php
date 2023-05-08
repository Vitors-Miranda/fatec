<?php

namespace App\Controllers;

use App\Models\Edital;

class EditalController{
    public function post(){
        return Edital::insert($_POST);
    }
    public function get(){
        return Edital::select($_GET);
    }
}
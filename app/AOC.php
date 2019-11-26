<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AOC extends Model
{
    public function majors(){
        return $this->hasMany(Major::class);
    }
}

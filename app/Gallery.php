<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    public function gallery_album(){
        return $this->hasMany(GalleryAlbum::class);
    }
}

<?php

namespace App\Http\Controllers;

use App\Gallery;
use App\GalleryAlbum;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    //index
    public function index(){
        return Gallery::orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'thumb.*'=>'required',
            'images.*'=>'required'
        ]);
        $store = new Gallery();
        $store->thumb = $input['thumb'][0]['path'];
        $store->title = $input['title'];
        $store->save();
        foreach ($input['images'] as $image){
            GalleryAlbum::insert([
                'gallery_id'=>$store->id,
                'path'=>$image['path'],
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ]);
        }
        return $store;
    }
    //edit
    public function edit($id){
        return Gallery::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'title'=>'required'
        ]);
        $update = Gallery::findOrFail($id);
        $update->title = $input['title'];
        $update->save();
    }
    //destroy
    public function destroy($id){
        Gallery::findOrFail($id)->delete();
    }
}

<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    function YoutubeID($url)
    {
        if(strlen($url) > 11)
        {
            if (preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url, $match))
            {
                return $match[1];
            }
            else
                return false;
        }

        return $url;
    }
    //index
    public function index(){
        return Video::orderBy('created_at','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'url'=>'required',
        ]);
        $parser = $this->YoutubeID($input['url']);
        $store = new Video();
        $store->title = $input['title'];
        $store->url = $parser;
        $store->save();
        return $store;
    }
    //edit
    public function edit($id){
        return Video::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $update =  Video::findOrFail($id);
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'url'=>'required',
        ]);
        $parser = $this->YoutubeID($input['url']);
        $update->title = $input['title'];
        $update->url = $parser;
        $update->save();
    }
    //destroy
    public function destroy($id){
        Video::findOrFail($id)->delete();
    }
}

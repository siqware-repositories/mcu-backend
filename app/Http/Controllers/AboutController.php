<?php

namespace App\Http\Controllers;

use App\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    //index
    public function index(){
        return About::orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'excerpt'=>'required',
            'content'=>'required'
        ]);
        $store = new About();
        $store->excerpt = $input['excerpt'];
        $store->title = $input['title'];
        $store->content = $input['content'];
        $store->save();
        return $store;
    }
    //edit
    public function edit($id){
        return About::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'excerpt'=>'required',
            'content'=>'required'
        ]);
        $update = About::findOrFail($id);
        $update->excerpt = $input['excerpt'];
        $update->title = $input['title'];
        $update->content = $input['content'];
        $update->save();
    }
    //destroy
    public function destroy($id){
        About::findOrFail($id)->delete();
    }
}

<?php

namespace App\Http\Controllers;

use App\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    //index
    public function index(){
        return News::orderBy('created_at','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'thumb'=>'required',
            'category'=>'required',
            'content'=>'required',
        ]);
        $store = new News();
        $store->title = $input['title'];
        $store->content = $input['content'];
        $store->thumb = $input['thumb'];
        $store->category = $input['category'];
        $store->user_id = 1;
        $store->save();
        return News::find($store->id);
    }
    //edit
    public function edit($id){
        return News::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'thumb'=>'required',
            'category'=>'required',
            'content'=>'required',
        ]);
        $update = News::findOrFail($id);
        $update->title = $input['title'];
        $update->content = $input['content'];
        $update->thumb = $input['thumb'];
        $update->category = $input['category'];
        $update->user_id = 1;
        $update->save();
        return News::find($update->id);
    }
    //toggle active
    public function toggle_active($id){
        $toggle_active = News::findOrFail($id);
        $toggle_active->is_active = !$toggle_active->is_active;
        $toggle_active->save();
    }
    //toggle publish
    public function toggle_publish($id){
        $toggle_publish = News::findOrFail($id);
        $toggle_publish->is_publish = !$toggle_publish->is_publish;
        $toggle_publish->save();
    }
}

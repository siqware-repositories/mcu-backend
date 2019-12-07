<?php

namespace App\Http\Controllers;

use App\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BannerController extends Controller
{
    //index
    public function index(){
        return Banner::orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'banner'=>'required'
        ]);
        $store = new Banner();
        $store->title= $input['title'];
        $store->banner= $input['banner'];
        $store->save();
        return $store;
    }
    //edit
    public function edit($id){
        return Banner::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'title'=>'required',
            'banner'=>'required'
        ]);
        $update = Banner::findOrFail($id);
        $update->title= $input['title'];
        $update->banner= $input['banner'];
        $update->save();
    }
    //destroy
    public function destroy($id){
        Banner::findOrFail($id)->delete();
    }
    //toggle_status
    public function toggle_status($id){
        $toggle = Banner::findOrFail($id);
        $toggle->status = true;
        $toggle->save();
        DB::table('banners')->whereNotIn('id', [$toggle->id])->update(['status' => false]);
    }
}

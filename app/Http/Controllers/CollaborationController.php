<?php

namespace App\Http\Controllers;

use App\Collaboration;
use Illuminate\Http\Request;

class CollaborationController extends Controller
{
    //index
    public function index(){
        return Collaboration::orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'logo'=>'required',
            'org_name'=>'required',
            'description'=>'required',
        ]);
        $store = new Collaboration();
        $store->logo = $input['logo'];
        $store->org_name = $input['org_name'];
        $store->description = $input['description'];
        $store->url = $input['url'];
        $store->save();
        return $store;
    }
    //edit
    public function edit($id){
        return Collaboration::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'logo'=>'required',
            'org_name'=>'required',
            'description'=>'required',
        ]);
        $update = Collaboration::findOrFail($id);
        $update->logo = $input['logo'];
        $update->org_name = $input['org_name'];
        $update->description = $input['description'];
        $update->url = $input['url'];
        $update->save();
    }
    //destroy
    public function destroy($id){
        Collaboration::findOrFail($id)->delete();
    }
}

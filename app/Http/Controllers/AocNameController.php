<?php

namespace App\Http\Controllers;

use App\AocName;
use Illuminate\Http\Request;

class AocNameController extends Controller
{
    //index
    public function index(){
        return AocName::orderBy('created_at','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new AocName();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    //destroy
    public function destroy($id){
        AocName::findOrFail($id)->delete();
    }
}

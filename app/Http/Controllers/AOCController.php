<?php

namespace App\Http\Controllers;

use App\AOC;
use App\Major;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AOCController extends Controller
{
    //index
    public function index(){
        return AOC::orderBy('created_at','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'aoc.name'=>'required',
            'aoc.content'=>'required',
        ]);
        $store = new AOC();
        $store->name = $input['aoc']['name'];
        $store->content = $input['aoc']['content'];
        $store->save();
        //is major
        if ($input['is_major']){
            foreach ($input['majors'] as $major){
                DB::table('majors')->insert([
                    'a_o_c_id'=>$store->id,
                    'major'=>$major['name'],
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ]);
            }
        }
        return $store;
    }
    //edit
    public function edit($id){
        return AOC::with('majors')->where('id',$id)->first();
    }
    //add major
    public function add_major(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'major'=>'required'
        ]);
        $store = new Major();
        $store->major = $input['major'];
        $store->a_o_c_id = $id;
        $store->save();
        return Major::find($store->id);
    }
    //update major
    public function update_major(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'key'=>'required',
            'content'=>'required',
        ]);
        $key = $input['key'];
        $update = Major::findOrFail($id);
        $update->$key = $input['content'];
        $update->save();
    }
    //destroy
    public function destroy($id){
        AOC::findOrFail($id)->delete();
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'aoc.name'=>'required',
            'aoc.content'=>'required',
        ]);
        $store = AOC::findOrFail($id);
        $store->name = $input['aoc']['name'];
        $store->content = $input['aoc']['content'];
        $store->save();
    }
}

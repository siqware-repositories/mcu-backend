<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //index
    public function index(){
        return Project::orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'logo'=>'required',
            'project_name'=>'required',
            'project_from'=>'required',
            'project_status'=>'required',
            'description'=>'required',
        ]);
        $store = new Project();
        $store->logo = $input['logo'];
        $store->project_name = $input['project_name'];
        $store->project_from = $input['project_from'];
        $store->project_status = $input['project_status'];
        $store->description = $input['description'];
        $store->save();
        return $store;
    }
    //edit
    public function edit($id){
        return Project::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'logo'=>'required',
            'project_name'=>'required',
            'project_from'=>'required',
            'project_status'=>'required',
            'description'=>'required',
        ]);
        $update = Project::findOrFail($id);
        $update->logo = $input['logo'];
        $update->project_name = $input['project_name'];
        $update->project_from = $input['project_from'];
        $update->project_status = $input['project_status'];
        $update->description = $input['description'];
        $update->save();
    }
    //destroy
    public function destroy($id){
        Project::findOrFail($id)->delete();
    }
}

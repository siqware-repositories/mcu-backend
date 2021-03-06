<?php

namespace App\Http\Controllers;

use App\About;
use App\AOC;
use App\Banner;
use App\Collaboration;
use App\Gallery;
use App\News;
use App\Project;
use App\Video;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //corporation
    public function get_corporation(){
        return Gallery::with('gallery_album')->where('title','corporation')->first();
    }
    //news
    public function get_news(){
        return News::where('is_publish',true)->orderBy('created_at','desc')->get();
    }
    //news
    public function get_videos(){
        return Video::orderBy('created_at','desc')->get();
    }
    //gallery
    public function get_galleries(){
        return Gallery::with('gallery_album')->where('title','<>','corporation')->get();
    }
    //about
    public function get_abouts(){
        return About::all();
    }
    //aoc
    public function get_aoc(){
        return AOC::with('majors')->get();
    }
    //project
    public function get_project(){
        return Project::all();
    }
    //collaboration
    public function get_collaboration(){
        return Collaboration::all();
    }
    //banner
    public function get_banner(){
        return Banner::where('status',true)->first();
    }
}

<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('/user', 'UserController');
Route::post('/user-register', 'UserController@register')->name('user.register');
Route::post('/user-login', 'UserController@login')->name('user.login');
Route::post('/file-upload', 'FileUploadController@upload')->name('file.upload');
Route::post('/file-upload-tinymce', 'FileUploadController@upload_tinymce')->name('file.upload.tinymce');
Route::post('/file-upload-thumb', 'FileUploadController@upload_thumb')->name('file.upload.thumb');
Route::post('/file-upload-logo', 'FileUploadController@upload_logo')->name('file.upload.logo');
Route::post('/file-upload-original', 'FileUploadController@upload_original')->name('file.upload.original');
Route::group(['middleware' => 'auth:api'], function () {
    Route::resource('/news', 'NewsController');
    Route::post('/news-toggle-active/{id}', 'NewsController@toggle_active')->name('news.toggle.active');
    Route::post('/news-toggle-publish/{id}', 'NewsController@toggle_publish')->name('news.toggle.publish');
    Route::resource('/settings-aoc-name', 'AocNameController');
    Route::resource('/aoc', 'AOCController');
    Route::post('/aoc-add-major/{id}', 'AOCController@add_major')->name('aoc.add.major');
    Route::post('/aoc-update-major/{id}', 'AOCController@update_major')->name('aoc.update.major');
    Route::resource('/video', 'VideoController');
    Route::resource('/gallery', 'GalleryController');
    Route::resource('/about', 'AboutController');
    Route::resource('/project', 'ProjectController');
    Route::resource('/collaboration', 'CollaborationController');
    Route::resource('/banner', 'BannerController');
    Route::post('/banner-toggle/{id}', 'BannerController@toggle_status')->name('banner.toggle.status');
});
//front
Route::get('/get-corporation','HomeController@get_corporation');
Route::get('/get-news','HomeController@get_news');
Route::get('/get-videos','HomeController@get_videos');
Route::get('/get-gallery','HomeController@get_galleries');
Route::get('/get-about','HomeController@get_abouts');
Route::get('/get-aoc','HomeController@get_aoc');
Route::get('/get-project','HomeController@get_project');
Route::get('/get-collaboration','HomeController@get_collaboration');
Route::get('/get-banner','HomeController@get_banner');



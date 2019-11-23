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
Route::post('/file-upload','FileUploadController@upload')->name('file.upload');
Route::post('/file-upload-thumb','FileUploadController@upload_thumb')->name('file.upload.thumb');
Route::resource('/news','NewsController');
Route::post('/news-toggle-active/{id}','NewsController@toggle_active')->name('news.toggle.active');
Route::post('/news-toggle-publish/{id}','NewsController@toggle_publish')->name('news.toggle.publish');

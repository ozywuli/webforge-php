<?php

use Illuminate\Http\Request;

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

Route::post('login', 'api\PassportController@login');
 
Route::post('register', 'api\PassportController@register');
 
Route::group(['middleware' => 'auth:api'], function() {
    Route::get('get-details', 'api\PassportController@getDetails');
    Route::post('social', 'api\SocialController@store');
    Route::post('meta', 'api\MetaController@store');
});




<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TodosAPIController;

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

Route::get('/todos', [TodosAPIController::class, 'index']);
Route::post('/todos', [TodosAPIController::class, 'new']);
Route::put('/todos/{todo}', [TodosAPIController::class, 'edit']);
// Route::put('/todos/{id}', [TodosAPIController::class, 'edit']);
Route::delete('/todos/{todo}', [TodosAPIController::class, 'delete']);
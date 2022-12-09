<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;
use App\Http\Controllers\UsersInfoController;
use App\Http\Controllers\GroupController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

//login and register
Route::get('home', [CustomAuthController::class, 'dashboard'])->name('dashboard')->middleware('auth');; 
Route::get('login', [CustomAuthController::class, 'index'])->name('login')->middleware('guest');
Route::post('custom-login', [CustomAuthController::class, 'customLogin'])->name('login.custom'); 
Route::get('registration', [CustomAuthController::class, 'registration'])->name('register-user')->middleware('guest');;
Route::post('custom-registration', [CustomAuthController::class, 'customRegistration'])->name('register.custom'); 
Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');
Route::post('change-password', [CustomAuthController::class, 'changePassword'])->name('change-password'); 


//add 
Route::get('add', [UsersInfoController::class, 'add'])->name('add')->middleware('auth');
Route::post('add', [UsersInfoController::class, 'addnew'])->name('add')->middleware('auth'); 
Route::get('view-user', [UsersInfoController::class, 'viewUser'])->name('view-user')->middleware('auth');
Route::get('data/{id}', [UsersInfoController::class, 'data'])->middleware('auth');
Route::post('data/{id}', [UsersInfoController::class, 'addData'])->middleware('auth');

//add new groups
Route::get('add-group', [GroupController::class, 'viewGroup'])->name('add-group')->middleware('auth');
Route::post('add-group', [GroupController::class, 'addGroup'])->middleware('auth');
Route::get('list-group', [GroupController::class, 'listGroup'])->name('list-group')->middleware('auth');
Route::get('group-members/{id}', [GroupController::class, 'groupMembers'])->name('group-members')->middleware('auth');



//assign groups
Route::get('showdata/{id}', [UsersInfoController::class, 'showdata'])->middleware('auth');
Route::post('showdata/{id}', [UsersInfoController::class, 'assignGroupData'])->middleware('auth');



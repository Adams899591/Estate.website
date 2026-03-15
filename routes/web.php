<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Welcome");
});


Route::inertia("home", "Home");
Route::inertia("estate", "Estate");
Route::inertia("dashboard", "AdminDashboard");


require __DIR__.'/auth.php';

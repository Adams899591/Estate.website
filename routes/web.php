<?php

use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PropertiesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Welcome");
});


Route::inertia("home", "Home");
Route::inertia("estate", "Estate");


Route::prefix("admin")->group(function(){

Route::get("dashboard",[DashboardController::class,"showDashboardPage"])->name("page.dashboard");

Route::get("properties",[PropertiesController::class,"showPropertiesPage"])->name("page.properties");
Route::get("addProperty",[PropertiesController::class,"AddPropertyPage"])->name("page.addProperty");

Route::get("analytics",[AnalyticsController::class,"AnalyticsPage"])->name("page.analytics");

});



require __DIR__.'/auth.php';

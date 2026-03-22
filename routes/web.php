<?php

use App\Http\Controllers\Admin\AgentController;
use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MessagesController;
use App\Http\Controllers\Admin\PropertiesController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DevLux\DevLuxPagesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return Inertia::render("Admin/Login");
    return inertia("Welcome");
});
 
Route::inertia("home", "Home");
Route::inertia("estate", "");


// ================ ====================
Route::controller(AuthController::class)->prefix("auth")->group(function(){
     Route::get("adminLogin", "showloginPage")->name("login");
     Route::post("authenticateAdmin", "authenticateAdmin")->name("authenticate.admin");
});




// ================ ====================
Route::controller(DevLuxPagesController::class)->prefix("DevLux")->group(function(){

  Route::get("home", "showHomePage")->name("page.home");
  Route::get("properties", "showPropertiesPage")->name("page.properties");
  Route::get("aboutUs", "showAboutUsPage")->name("page.aboutUs");
  Route::get("contactUs", "showContactUsPage")->name("page.contactUs");
  Route::get("viewProperty", "showViewPropretyPage")->name("page.viewProperty"); // id later


});



// ================ ====================
Route::prefix("admin")->group(function(){

    // dashboard routes
    Route::get("dashboard",[DashboardController::class,"showDashboardPage"])->name("page.dashboard");

    // property routes
    Route::get("properties",[PropertiesController::class,"showPropertiesPage"])->name("page.admin.properties");
    Route::get("addProperty",[PropertiesController::class,"showAddPropertyPage"])->name("page.addProperty");
    Route::get("editPropertyPage/{id}",[PropertiesController::class,"showEditPropertyPage"])->name("page.editProperty");
    Route::get("deleteProperty/{id}",[PropertiesController::class,"deleteProperty"])->name("deleteProperty");

    Route::post("editProperty/{id}",[PropertiesController::class,"editProperty"])->name("editProperty");
    Route::post("addProperty",[PropertiesController::class,"addProperty"])->name("addProperty");



    // agent routes
    Route::get("agent",[AgentController::class,"showAgentPage"])->name("page.agent");

    // messages routes
    Route::get("message",[MessagesController::class,"showMassagesPage"])->name("page.messages");

    // analytics routes
    Route::get("analytics",[AnalyticsController::class,"showAnalyticsPage"])->name("page.analytics");

    // settings routes
    Route::get("settings",[SettingsController::class,"showSettingsPage"])->name("page.settings");

});



require __DIR__.'/auth.php';

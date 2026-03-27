<?php

use App\Http\Controllers\Admin\AgentController;
use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MessagesController;
use App\Http\Controllers\Admin\NotificationBellController;
use App\Http\Controllers\Admin\PropertiesController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DevLux\DevLuxPagesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia("Welcome");
});


// ================ ====================
Route::controller(AuthController::class)->prefix("auth")->group(function(){

     Route::get("adminLogin", "showloginPage")->name("login");
     Route::post("authenticateAdmin", "authenticateAdmin")->name("authenticate.admin");
     Route::post("logout", "logoutAdmin")->name("logout");
     
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
    Route::delete("deleteProperty/{id}",[PropertiesController::class,"deleteProperty"])->name("deleteProperty");

    Route::post("editProperty/{id}",[PropertiesController::class,"editProperty"])->name("editProperty");
    Route::put("addProperty",[PropertiesController::class,"addProperty"])->name("addProperty");



    // agent routes
    Route::get("agent",[AgentController::class,"showAgentPage"])->name("page.agent");
    Route::get("addAgentPage",[AgentController::class,"showAddAgenPage"])->name("page.addAgent");
    Route::put("addAgent",[AgentController::class,"addAgent"])->name("addAgent");

    // messages routes
    Route::get("message",[MessagesController::class,"showMassagesPage"])->name("page.messages");

    // analytics routes
    Route::get("analytics",[AnalyticsController::class,"showAnalyticsPage"])->name("page.analytics");

    // settings routes
    Route::get("settings",[SettingsController::class,"showSettingsPage"])->name("page.settings");
    Route::put("updateSettings", [SettingsController::class, "updateUserSettings"])->name("updateSettings");


    // notification bell 
     Route::get("notify",[NotificationBellController::class,"markAllNotifcationAsRead"])->name("bell.notify");
     Route::get("notify_id",[NotificationBellController::class,"updateSpecificNotifcation"]);
});



require __DIR__.'/auth.php';

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateUserSettingsRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SettingsController extends Controller
{
    //show Settings Page
    public function showSettingsPage(){
        return Inertia::render("Admin/Settings");
    }

    // update User Settings
    public function updateUserSettings(UpdateUserSettingsRequest $request){
        
        // validate the request data
        $validatedData = $request->validated();
        
        // update the user's settings
        /** @var User $user */
        $user = Auth::user();

        $user->name = $validatedData["name"];
        $user->email = $validatedData["email"];

        if ($request->filled("password")) {
            $user->password = Hash::make($validatedData["password"]);
        }
        $user->save();
         
        // redirect back to the settings page with a success message
        return redirect()->route("page.settings")->with("success", "Settings updated successfully");
    }
    
}

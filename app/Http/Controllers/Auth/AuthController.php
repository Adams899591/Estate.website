<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{ 
    //show Login Page
    public function showloginPage(){
        return Inertia::render("Auth/Login");
    }

    //Authenticate Admin
    public function authenticateAdmin(){
        // run validation
        $credentials = request()->validate([
            "email" => ["required", "email"],
            "password" => ["required"]
        ]);

        // attempt to login
        if(Auth::attempt([
            "email" => $credentials["email"],
            "password" => $credentials["password"]
        ])){
            request()->session()->regenerate();
            return redirect()->intended(route("page.dashboard"));
        }else{
            return back()->withErrors([
                "email" => "Invalid Credentials"
            ]);
        }

        
    }
}

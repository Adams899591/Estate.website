<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DevLuxPagesController extends Controller
{
    //show Home Page
    public function showHomePage(){
        return Inertia::render("DevLux/Home");
    }

    //show Properties Page
    public function showPropertiesPage(){
        return Inertia::render("DevLux/Properties");
    }

    //show About Us Page
    public function showAboutUsPage(){
        return Inertia::render("DevLux/AboutUs");
    }

    //show Contact Us Page
    public function showContactUsPage(){
        return Inertia::render("DevLux/ContactUs");
    }

    //show Property Page
    public function showViewPropretyPage(){
        return Inertia::render("DevLux/ViewProperty");
    }
}

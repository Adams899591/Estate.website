<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutUsController extends Controller
{
     //show About Us Page
    public function showAboutUsPage(){
        return Inertia::render("DevLux/AboutUs");
    }
}

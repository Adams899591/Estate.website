<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    //show Contact Us Page
    public function showContactUsPage(){
        return Inertia::render("DevLux/ContactUs");
    }
}

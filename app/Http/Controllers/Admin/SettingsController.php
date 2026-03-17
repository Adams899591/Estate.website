<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    //show Settings Page
    public function showSettingsPage(){
        return Inertia::render("Admin/Settings");
    }
}

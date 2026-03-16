<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PropertiesController extends Controller
{
    //show Properties Page
    public function showPropertiesPage(){
        return Inertia::render("Admin/Properties");
    }

    //show Add Property Page
    public function showAddPropertyPage(){
        return Inertia::render("Admin/AddProperty");
    }
}

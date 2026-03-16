<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //show Dashboard Page
    public function showDashboardPage(){
        return Inertia::render("Admin/Dashboard");
    }


}

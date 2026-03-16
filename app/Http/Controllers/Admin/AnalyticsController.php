<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    //show Analytics Page
    public function showAnalyticsPage(){
        return Inertia::render("Admin/Analytics");
    }
}

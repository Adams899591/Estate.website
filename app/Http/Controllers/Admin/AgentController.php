<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentController extends Controller
{

    //show Analytics Page
    public function showAgentPage(){
        return Inertia::render("Admin/Agents");
    }
    
}

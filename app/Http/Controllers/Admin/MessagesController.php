<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessagesController extends Controller
{
    //show Massages Page
    public function showMassagesPage(){
        return Inertia::render("Admin/Messages");
    }
}

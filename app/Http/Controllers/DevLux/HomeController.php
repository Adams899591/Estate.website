<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use App\Http\Resources\DevLux\PropertiesResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
   //show Home Page
    public function showHomePage(){

        // $properties = Property::all();
        $properties = Property::inRandomOrder()->limit(3)->get();

        return Inertia::render("DevLux/Home", [ "properties" => PropertiesResource::collection($properties)]);
    }
}

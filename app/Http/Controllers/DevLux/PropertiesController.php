<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use App\Http\Resources\DevLux\PropertiesResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertiesController extends Controller
{
     //show Properties Page
    public function showPropertiesPage(){

         $properties = Property::all();
         
        return Inertia::render("DevLux/Properties", [ "properties" => PropertiesResource::collection($properties)]);
    }
}

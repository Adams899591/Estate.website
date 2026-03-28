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


       if (request("propertyType")) {
             $properties =  Property::where("type", request("propertyType"))->inRandomOrder()->paginate(3);
       }else if(request("propertyStatus")) {
            $properties =  Property::where("status", request("propertyStatus"))->inRandomOrder()->paginate(3);
       }else {
           $properties = Property::inRandomOrder()->paginate(3);
             
       }

       return Inertia::render("DevLux/Properties", [ "properties" => PropertiesResource::collection($properties)]);



    }
}

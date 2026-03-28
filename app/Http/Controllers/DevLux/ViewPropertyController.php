<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use App\Http\Resources\DevLux\PropertiesResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewPropertyController extends Controller
{
    //show Property Page
    public function showViewPropretyPage(){


        if (request("singlePropertyId")) { // get the id on the url that is passed and show page 
           
            $property =  Property::findOrFail(request("singlePropertyId"));
            
            return Inertia::render("DevLux/ViewProperty",["property" => new PropertiesResource($property)]);
        }

        return redirect()->back(); // redirect back if no id is found
       
        
    }
}

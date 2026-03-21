<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\PropertyResource;
use App\Models\Property;
use App\Models\User;
use Inertia\Inertia;
use PhpParser\Builder\Property as BuilderProperty;
use Symfony\Component\HttpFoundation\Request;

class PropertiesController extends Controller
{
    //show Properties Page
    public function showPropertiesPage(){
        $properties = Property::with("user")->latest("id")->paginate(3);
        //  dd($properties->user);
        return Inertia::render("Admin/Properties", ["properties" => PropertyResource::collection($properties) ]);
    }

    // show Add Property Page
    public function showAddPropertyPage(){
        //   dd($id);
        return Inertia::render("Admin/AddProperty");
    }

    // show Edit Property Page
    public function showEditPropertyPage($id){
        $property = Property::with("user")->findOrFail($id);

        $agents = User::all();

        return Inertia::render("Admin/EditProperty", ["property" => new PropertyResource($property), "agents" => $agents ]);
    }

    // Delete Property 
    public function deleteProperty($id){
          dd("ary y sure u want to delete " . $id);
       
    }

    public function editProperty(Request $request, $id){
        // validate the request
        $request->validate([
            "title" => "required|string",
            "description" => "required|string",
            "price" => "required|numeric",
            "type" => "required|string",
            "status" => "required|string",
            "image" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            // "admin_id" => "required|exists:users,id",
            "bedrooms" => "required|integer",
            "bathrooms" => "required|integer",
            "area" => "required|numeric",
            "city" => "required|string",
            "address" => "required|string",
            "state" => "required|string",
            "zipcode" => "required|string",
        ]);
          
        $property = Property::with("user")->findOrFail($id);
      
        $property->update($request->all());

        return redirect()->route("page.admin.properties")->with("success", "Property updated successfully");

    }
}

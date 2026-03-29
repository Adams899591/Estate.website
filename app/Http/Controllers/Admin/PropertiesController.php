<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AddPropertyRequest;
use App\Http\Resources\Admin\PropertyResource;
use App\Models\Message;
use App\Models\Property;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PropertiesController extends Controller
{
    //show Properties Page
    public function showPropertiesPage(){

         $properties = Property::query(); // start a query builder instance for the Property model

        if (request("status")) { // check if the request has a "status" parameter

                if (request("status") == "All Status") {
                     $properties->with("user");
                }else {
                     $properties->where("status", "=",request("status"));
                }
            

        }elseif(request("type")){ // check if the request has a "type" parameter

                if (request("type") == "All Types") {
                     $properties->with("user");
                }else {
                     $properties->where("type", "=",request("type"));
                }
           

        }elseif(request("inputSearch")){ // check if the request has a "inputSearch" parameter
            $properties->where("title", "LIKE", "%".request("inputSearch")."%")
            ->orWhere("description", "LIKE", "%".request("inputSearch")."%")
            ->orWhere("city", "LIKE", "%".request("inputSearch")."%")
            ->orWhere("state", "LIKE", "%".request("inputSearch")."%")
            ->orWhere("address", "LIKE", "%".request("inputSearch")."%");

        }else{ // if no filter is applied, we will just load the properties with their associated user (agent)
           $properties->with("user");
        }

        // we will paginate the properties and load the associated user (agent) for each property, then we will return the properties to the view
        $properties = $properties->with("user")->latest("id")->paginate(3)->withQueryString();
      
        // we will return the properties to the view using the PropertyResource to transform the properties data
        return Inertia::render("Admin/Properties", ["properties" => PropertyResource::collection($properties),
                                                    "inputSearch" => request("inputSearch")
                                                    ]);
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
        
        $property = Property::FindOrFail($id);

        // check if the property has an image and delete it from storage
        if ($property->image) {
           Storage::disk("public")->delete($property->image);
        }

        $property->delete();

        return redirect()->route("page.admin.properties")->with("success", "Property deleted successfully");

       
    }

    // handles Edit Property 
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

    // handles Add Property
    public function addproperty(AddPropertyRequest $request){

       
        $data = $request->all(); // get all  request 

       // image upload handling
        //  if ($request->hasFile("image")) {
        //     $image = $request->file("image");
        //     $path = $image->store("properties", "public"); // store the image in the "properties" directory in the public disk
        //     $data["image"] = $path; // add the image path to the request data so it can be saved in the database
       // }

        
         // we will create a new property and associate it with the currently authenticated user (agent)
            $property  = new Property();
            $property->title = $data["title"];
            $property->description = $data["description"];
            $property->price = $data["price"];
            $property->type = $data["type"];
            $property->status = $data["status"];
            $property->bedrooms = $data["bedrooms"];
            $property->bathrooms = $data["bathrooms"];
            $property->area = $data["area"];
            $property->city = $data["city"];
            $property->address = $data["address"];
            $property->state = $data["state"];
            $property->zipcode = $data["zipcode"];
            $property->image = $data["image"];
         
         $property->slug = Str::slug($request["title"]) . '-' . uniqid(); // generate a unique slug for the property
         $property->agent_id = Auth::id(); // associate the property with the currently authenticated user (agent)
         $property->save();


                           // insert into message table
        Message::create([
            "type" => "propertyModel",
            "title" =>  "New Property Added",
            "message" =>  Auth::user()->name . " has successfully added a new property listing to the database.",
            "summary" => "New Property Added: ". $property->title,
            "user_id" => $property->agent_id,
            "is_read" => false,   
        ]);

        return redirect()->route("page.admin.properties")->with("success", "Property Added successfully");

    }
}

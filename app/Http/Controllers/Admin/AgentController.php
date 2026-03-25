<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AgentResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentController extends Controller
{

    //show Agent Page
    public function showAgentPage(){

            $agents = User::query();
               
            if (request("status")) { // check if the request has a "Status" parameter

                if (request("status") == "All Status") {
                    $agents->with("property");
                } else {
                    $agents->where("status", request("status"))->with("property");
                }
                   
            }elseif(request("inputSearch")){ // check if the request has a "inputSearch" parameter

                $agents->where("name", "LIKE", "%".request("inputSearch")."%")
                ->orWhere("email", "LIKE", "%".request("inputSearch")."%")
                ->orWhere("phone", "LIKE", "%".request("inputSearch")."%")
                ->orWhere("status", "LIKE", "%".request("inputSearch")."%");

            }else {
                $agents->with("property");
            }

            $agents = $agents->latest("id")->paginate(3)->withQueryString();
      
        

         return Inertia::render("Admin/Agents", ["agents" =>  AgentResource::collection($agents)]);
    }
    
    //show Add Agent Page
    public function showAddAgenPage(){

         return Inertia::render("Admin/AddAgent");
    }

    // handles Add Agent
    public function addAgent(){

       // validate the request data
        $validatedData = request()->validate([
            "name" => "required|string|max:255",
            "email" => "required|email|unique:users,email",
            "phone" => "required|string|max:20",
            "status" => "required|in:active,Inactive",
            "role" => "required|in:admin,agent",
            "password" => "required|string|min:8|confirmed",
        ]);
        //   dd("reach");

        // create a new agent using the validated data
        User::create([
            "name" => $validatedData["name"],
            "email" => $validatedData["email"],
            "phone" => $validatedData["phone"],
            "status" => $validatedData["status"],
            "password" => bcrypt($validatedData["password"]),
        ]);

        // redirect back to the agents page with a success message
        return redirect()->route("page.agent")->with("success", "Agent added successfully.");
    }

}

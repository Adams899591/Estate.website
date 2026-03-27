<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AddAgentRequest;
use App\Http\Resources\Admin\AgentResource;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AgentController extends Controller
{
   // capiterlize the first letter of each word in the string
    private function capitalizeFirstLetter($string){
        return ucfirst($string);
    }



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
    public function addAgent(AddAgentRequest $request){

       // validate the request data
       $validatedData = $request->validated();
     try {
       
            DB::beginTransaction();   // start a transaction

                // create a new agent using the validated data
                    $user =  User::create([
                        "name" => $validatedData["name"],
                        "email" => $validatedData["email"],
                        "phone" => $validatedData["phone"],
                        "status" => $validatedData["status"],
                        "role" => $validatedData["role"],
                        "password" => bcrypt($validatedData["password"]),

                    ]);

                    //  insert into message table
                    Message::create([
                        "type" => "userModel",
                        "title" =>  "Team Update",
                        "message" => "New " . $this->capitalizeFirstLetter($user->role) . " " . $user->name . " was added to the system.",
                        "summary" => "New Administrator Joined",
                        "user_id" => $user->id,
                        "is_read" => false,   
                    ]);

            DB::commit(); // commit the transaction
             
                    // redirect back to the agents page with a success message
                    return redirect()->route("page.agent")->with("success", "Agent added successfully.");

     } catch (\Throwable $th) {
           DB::rollBack(); // roll back the transaction if any error occurs
                    // redirect back to the agents page with an error message
                    return redirect()->route("page.agent")->with("error", "Failed to add agent. Please try again.");
     }
   



    }

}

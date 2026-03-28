<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\DashboardResource;
use App\Models\Property;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //show Dashboard Page
    public function showDashboardPage(){

        
        // this section handles property count 
        $statusCount = [
            "for_rent" => Property::where("status", "For Rent")->count(),
            "for_sale" => Property::where("status", "For Sale")->count(),
            "sold" => Property::where("status", "Sold")->count(),
            "status_total" => Property::count(),
            "total_view" => Property::sum("views"),
        ];
        
        // this handles the maping of property on react side
        $properties = Property::latest()->paginate(3);

        return Inertia::render("Admin/Dashboard",[ "properties"  =>  DashboardResource::collection($properties), "statusCount" => $statusCount]);
    }


}

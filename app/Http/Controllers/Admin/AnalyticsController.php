<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ShowAnalyticsPageResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    //show Analytics Page
    public function showAnalyticsPage(){

      // analytics data for property types and status 
       $analytics = [

            "commercial" => Property::where("type","Commercial")->count(),
            "house" => Property::where("type","House")->count(),
            "apartment" => Property::where("type","Apartment")->count(),
            "forSale" => Property::where("status","For Sale")->count(),
            "forRent" => Property::where("status","For Rent")->count(),
            "sold" => Property::where("status","Sold")->count(),
       ];


    
        return Inertia::render("Admin/Analytics",["analytics" => $analytics]);
    }
}

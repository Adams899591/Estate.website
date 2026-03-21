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

        $properties = Property::latest()->paginate(3);

        return Inertia::render("Admin/Dashboard",[ "properties"  =>  DashboardResource::collection($properties) ]);
    }


}

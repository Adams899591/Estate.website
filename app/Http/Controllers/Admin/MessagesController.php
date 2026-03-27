<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ShowMassagesPageResource;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessagesController extends Controller
{
    //show Massages Page
    public function showMassagesPage(){

        // Start a query for the specific types of messages you want to show
        $query = Message::whereIn("title", ["Team Update", "New Property Added"]);

        // Only filter by 'is_read' if the 'message' parameter is explicitly provided in the URL
        // We check request()->has() to prevent 'null == 0' evaluating to true on page load
        if (request()->has('message') && (request("message") === '1' || request("message") === '0')) {
            $query->where("is_read", request("message"));
        }

        $messages = $query->latest()->paginate(1)->withQueryString();

        return Inertia::render("Admin/Messages", ["messages" => ShowMassagesPageResource::collection($messages)]);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class NotificationBellController extends Controller
{
    
  // this set all UnRead  Notifcation As Read
  public function markAllNotifcationAsRead(){
     
        $notifications =  Message::where("is_read", true)->get();

        foreach($notifications as $notify){
            $notify->is_read = false;
            $notify->save();
        }
  
     return redirect()->route("page.messages")->with("success", "All notification marked as read");
  }

  public function updateSpecificNotifcation(){

     if (request("notifyId")) { // get the passed id 

            $notify =  Message::where("id", request("notifyId"))->get();
            
            $notify->is_read = true;
            $notify->save();

            return redirect()->back();
     }

  }

}

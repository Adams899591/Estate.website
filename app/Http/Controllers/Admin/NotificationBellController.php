<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class NotificationBellController extends Controller
{
    
  // this set all UnRead  Notifcation As Read
  public function markAllNotifcationAsRead(){
     
        $notifications =  Message::where("is_read", false)->get();

        foreach($notifications as $notify){
            $notify->is_read = true;
            $notify->save();
        }
  
     return redirect()->route("page.messages")->with("success", "All notification marked as read");
  }

  // this set Specific Notifcation to Read   
  public function updateSpecificNotifcation(){

     if (request("notifyId")) { // get the passed id 

            $notify =  Message::FindOrFail(request("notifyId"));
            
            $notify->is_read = true;
            $notify->save();

            return redirect()->back();
     }

  }

}

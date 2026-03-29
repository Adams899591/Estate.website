<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentSuccessController extends Controller
{
    //show Payment Success Us Page
    public function showPaymentSuccessPage(){

            if (request("transactionId") && request("amount") && request("propertyName")) {

                // insert into message table 
                Message::create([
                        "type" => "Payment",
                        "title" =>  "System Notification",
                        "message" => "The full payment for the ". request("propertyName") . " has been received and verified",
                        "summary" => "Payment Confirmed: " . request("propertyName"),
                        "user_id" => null,
                        "is_read" => false, 
                ]);


                return Inertia::render("DevLux/PaymentSuccess", [
                        "transactionId" => request("transactionId"),
                        "amount" => request("amount"),
                        "propertyName" => request("propertyName"),
                ]);
            }

            return redirect()->back();
        
    }
}

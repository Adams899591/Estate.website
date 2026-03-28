<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentSuccessController extends Controller
{
    //show Payment Success Us Page
    public function showPaymentSuccessPage(){

            if (request("transactionId") && request("amount") && request("propertyName")) {


               return Inertia::render("DevLux/PaymentSuccess", [
                    "transactionId" => request("transactionId"),
                    "amount" => request("amount"),
                    "propertyName" => request("propertyName"),
               ]);
            }

            return redirect()->back();
        
    }
}

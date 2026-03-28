<?php

namespace App\Http\Controllers\DevLux;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    //show Contact Us Page
    public function showContactUsPage(){
        return Inertia::render("DevLux/ContactUs");
    }

    // handle contact form submission
    public function handleContactFormSubmission(Request $request){

        // Validation logic here
        $user = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10'
        ]);

        // Process the validated data (e.g., save to database, send email, etc.)
        Mail::to("usmanadams551@gmail.com")->send(new ContactFormMail($user));
        // ...


        // Redirect back with success message
        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }

}

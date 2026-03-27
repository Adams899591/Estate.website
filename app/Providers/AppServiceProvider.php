<?php

namespace App\Providers;

use App\Models\Message;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        Vite::prefetch(concurrency: 3);

        // for notification bell
        inertia()->share("fetchNotifications", function () {
            
             // return this to notification bell component to show the unread messages in the dropdown
             return Message::where("is_read", 0)->get()->map(function ($message) {
                   
                  // we can also use resource here but for now i will do it like this
                    return [ 
                        "id" => $message->id,
                        "title" => $message->title,
                        "message" => $message->message,
                        "is_read" => $message->is_read,
                        "created_at" => $message->created_at->diffForHumans(),
                    ];
             });

        });


        //  this returns the total count of unread notifications
        inertia()->share("notificationsCount", function (){
            return Message::where("is_read", 0)->count();
        });


    }
}

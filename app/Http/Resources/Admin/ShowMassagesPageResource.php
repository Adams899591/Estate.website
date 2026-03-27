<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowMassagesPageResource extends JsonResource
{
        /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = null; // this remove the default data wrapped that laravel normally come with


    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            "id" => $this->id,
            "message" => $this->message,
            "title" => $this->title,
            "subject" => $this->subject,
            "summary" => $this->summary,
            "is_read" => $this->is_read,
            "created_at" => Carbon::parse($this->created_at)->diffForHumans(),
        ];
    }
}

<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PropertyResource extends JsonResource
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
            "title" => $this->title,
            "price" => $this->price,
            "status" => $this->status, 
            "type" => $this->type,
            "description" => $this->description,
            "bedrooms" => $this->bedrooms,
            "bathrooms" => $this->bathrooms, 
            "area" => $this->area,
            "address" => $this->address,
            "city" => $this->city,
            "state" => $this->state,
            "zipcode" => $this->zipcode,
            "image" => $this->image,
            "created_at" => $this->created_at->format("Y-m-d"),

            // this data come from relationship
            "name" => $this->user?->name,
        ];
    }
}

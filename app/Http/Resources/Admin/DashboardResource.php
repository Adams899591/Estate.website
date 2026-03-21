<?php

namespace App\Http\Resources\Admin;

use Doctrine\Inflector\Rules\Word;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class DashboardResource extends JsonResource
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
            "title" => Str::limit($this->title, 20),
            "price" => $this->price,
            "status" => $this->status, 
            "created_at" => $this->created_at->format("Y-m-d"),
        ];
    }
}

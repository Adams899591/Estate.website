<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AddPropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|string",
            "description" => "required|string",
            "price" => "required|numeric",
            "type" => "required|string",
            "status" => "required|string",
            "image" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "bedrooms" => "required|integer",
            "bathrooms" => "required|integer",
            "area" => "required|numeric",
            "city" => "required|string",
            "address" => "required|string",
            "state" => "required|string",
            "zipcode" => "required|string",
        ];
    }
}

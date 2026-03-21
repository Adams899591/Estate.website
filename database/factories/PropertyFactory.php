<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{ 
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Data derived from your resources/js/properties.js
        $titles = [
            "Modern Luxury Villa",
            "Contemporary Urban Apartment",
            "Cozy Suburban Family Home",
            "Spacious Commercial Office",
            "Minimalist Seaside Condo",
            "Rustic Country Estate",
        ];
        $types = ["Villa", "Apartment", "House", "Commercial", "Condo", "Land"];
        $statuses = ["For Sale", 'Sold', "For Rent"];
        $images = [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        ];

        $title = fake()->unique()->randomElement($titles) . ' in ' . fake()->city();
        $slug = Str::slug($title);

        return [
            'title' => $title,
            'slug' => $slug,
            'description' => fake()->paragraphs(3, true),
            'price' => fake()->numberBetween(550000, 2500000),
            'type' => fake()->randomElement($types),
            'status' => fake()->randomElement($statuses),
            'bedrooms' => fake()->numberBetween(0, 6),
            'bathrooms' => fake()->numberBetween(2, 5),
            'area' => fake()->numberBetween(1100, 5500),
            'address' => fake()->streetAddress(),
            'city' => fake()->city(),
            'state' => fake()->stateAbbr(),
            'zipcode' => fake()->postcode(),
            'image' => fake()->randomElement($images),
            'is_featured' => fake()->boolean(),
            'views' => fake()->numberBetween(450, 3200),
            'agent_id' => User::inRandomOrder()->first()?->id ?? User::factory(),
        ];
    }
}

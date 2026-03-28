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
        static $index = 0;

        // Data derived from your resources/js/properties.js
        $titles = [
            "Modern Luxury Villa",
            "Contemporary Urban Apartment",
            "Cozy Suburban Family Home",
            "Spacious Commercial Office",
            "Minimalist Seaside Condo",
            "Rustic Country Estate",
            "Downtown Penthouse",
            "Cozy Family Cottage",
            "Contemporary Home",
            "Executive City Condo",
            "Exclusive Beachfront Villa",
        ];
        $types = [ "Apartment", "House", "Commercial"];
        $statuses = ["For Sale", 'Sold', "For Rent"];
        $images = [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ];

        $title = fake()->unique()->randomElement($titles) . ' in ' . fake()->city();
        $slug = Str::slug($title);

        $image = $images[$index % count($images)];
        $index++;

        return [
            'title' => $title,
            'slug' => $slug,
            'description' => fake()->paragraphs(1, true),
            'price' => fake()->numberBetween(550000, 2500000),
            'type' => fake()->randomElement($types),
            'status' => fake()->randomElement($statuses),
            'bedrooms' => fake()->numberBetween(0, 6),
            'bathrooms' => fake()->numberBetween(2, 5),
            'area' => fake()->numberBetween(1100, 5500),
            // 'sqft' => fake()->numberBetween(800, 5000),
            'address' => fake()->streetAddress(),
            'city' => fake()->city(),
            'state' => fake()->stateAbbr(),
            'zipcode' => fake()->postcode(),
            'image' => $image,
            'is_featured' => fake()->boolean(),
            'views' => fake()->numberBetween(450, 3200),
            'agent_id' => User::inRandomOrder()->first()?->id ?? User::factory(),
        ];
    }
}

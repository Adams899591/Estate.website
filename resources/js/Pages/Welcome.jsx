import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="text-center text-gray-900">
                        <h1 className="text-2xl font-bold">DevLux Estates Documentation</h1>
                        <p className="mt-4 text-gray-600">
                            Please check the source code of this file (<code>resources/js/Pages/Welcome.jsx</code>)
                            to view the defined <strong>Database Structure</strong> and <strong>Faker Records</strong>
                            based on the project pages.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

/*
|--------------------------------------------------------------------------
| DATABASE STRUCTURE (MIGRATIONS)
|--------------------------------------------------------------------------
| Based on the pages we have created (Admin Dashboard, Properties, Agents, Messages)
|
| 1. TABLE: users (Admins, Agents, Customers)
|    - id: bigint, primary keyper
|    - name: string
|    - email: string, unique 
|    - password: string
|    - role: enum('admin', 'agent', 'user') - Default 'user'
|    - phone: string, nullable (Seen in Agents page)
|    - status: enum('active', 'inactive') - Default 'active' (Seen in Agents page)
|    - avatar: string, nullable (path to profile image)
|    - remember_token: string
|    - created_at: timestamp
|    - updated_at: timestamp
|
| 2. TABLE: properties
|    - id: bigint, primary key
|    - title: string (e.g., "Modern Suburban Villa")
|    - slug: string, unique (for friendly URLs)
|    - description: text
|    - price: decimal(12, 2)
|    - type: enum('House', 'Apartment', 'Commercial', 'Villa', 'Condo', 'Land')
|    - status: enum('For Sale', 'For Rent', 'Sold', 'Pending')
|    - bedrooms: integer
|    - bathrooms: integer
|    - area: integer (sqft)
|    - address: string
|    - city: string
|    - state: string
|    - zipcode: string
|    - image: string (path to main property image)
|    - agent_id: bigint, foreign key (users.id)
|    - is_featured: boolean, default false
|    - views: integer, default 0 (Used in Analytics page)
|    - created_at: timestamp
|    - updated_at: timestamp
|
| 3. TABLE: messages (Inquiries & Contact)
|    - id: bigint, primary key
|    - name: string
|    - email: string
|    - subject: string, nullable
|    - message: text
|    - property_id: bigint, nullable, foreign key (properties.id)
|    - is_read: boolean, default false
|    - created_at: timestamp
|    - updated_at: timestamp
|
*/

/*
|--------------------------------------------------------------------------
| FAKER RECORDS (FACTORIES & SEEDERS)
|--------------------------------------------------------------------------
| Use these definitions in your Laravel Factory files to seed the database.
|
| --- UserFactory.php ---
| public function definition(): array
| {
|     return [
|         'name' => fake()->name(),
|         'email' => fake()->unique()->safeEmail(),
|         'email_verified_at' => now(),
|         'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
|         'role' => fake()->randomElement(['agent', 'user']),
|         'phone' => fake()->phoneNumber(),
|         'status' => fake()->randomElement(['active', 'inactive']),
|         'avatar' => null, // Or a placeholder URL
|         'remember_token' => Str::random(10),
|     ];
| }
|
| --- PropertyFactory.php ---
| public function definition(): array
| {
|     $types = ['House', 'Apartment', 'Commercial', 'Villa'];
|     $statuses = ['For Sale', 'For Rent', 'Sold', 'Pending'];
|
|     return [
|         'title' => fake()->sentence(4),
|         'slug' => fake()->slug(),
|         'description' => fake()->paragraph(5),
|         'price' => fake()->numberBetween(100000, 5000000),
|         'type' => fake()->randomElement($types),
|         'status' => fake()->randomElement($statuses),
|         'bedrooms' => fake()->numberBetween(1, 8),
|         'bathrooms' => fake()->numberBetween(1, 6),
|         'area' => fake()->numberBetween(500, 10000),
|         'address' => fake()->streetAddress(),
|         'city' => fake()->city(),
|         'state' => fake()->stateAbbr(),
|         'zipcode' => fake()->postcode(),
|         'image' => null, // Will handle upload or placeholder
|         'agent_id' => \App\Models\User::where('role', 'agent')->inRandomOrder()->first()->id ?? 1,
|         'is_featured' => fake()->boolean(20),
|         'views' => fake()->numberBetween(0, 5000),
|     ];
| }
|
| --- MessageFactory.php ---
| public function definition(): array
| {
|     return [
|         'name' => fake()->name(),
|         'email' => fake()->safeEmail(),
|         'subject' => fake()->sentence(3),
|         'message' => fake()->paragraph(),
|         'is_read' => fake()->boolean(30),
|     ];
| }
|
*/
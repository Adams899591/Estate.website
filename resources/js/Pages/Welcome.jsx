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




























            {/* New Product Notification (Duplicated from Header) */}
            {propertyAdded && propertyAdded.data.map(property => (
              <div key={property.id} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                      {/* Example: Unread Icon */}
                      {property.is_read == 1 ?                     <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7m-6 0l4 4L19 7" />
                    </svg> : <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-1.5 ml-1"></div>}
                      
                  </div>
                  <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-900">{property.title}</span>
                              <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">Property</span>
                          </div>
                          <span className="text-xs text-slate-500">{property.created_at}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{property.summery}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{property.message}</p>
                  </div>
              </div>
           ))}

            {/* New Admin Notification */}
            {teamUpdate && teamUpdate.data.map((update) => (

                <div key={update.id} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4" >
                    <div className="flex-shrink-0 pt-1">
                        {/* Dynamic Status Icon */}
                        {update.is_read == 1 ? (
                            <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg> 
                        ) : (
                            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-1.5 ml-1"></div>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-900">{update.title}</span>
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">Administrator</span>
                            </div>
                            <span className="text-xs text-slate-500">{update.created_at}</span>
                        </div>
                        <h3 className={`text-sm mb-1 ${!update.is_read ? 'font-bold text-slate-900' : 'font-medium text-slate-800'}`}>
                            {update.summary}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{update.message}</p>
                    </div>
                </div>

            ))} 
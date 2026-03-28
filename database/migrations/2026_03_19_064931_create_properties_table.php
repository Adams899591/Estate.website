<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. 
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->decimal('price', 12, 2);
            $table->enum('type', ['House', 'Apartment', 'Commercial', 'Villa', 'Condo', 'Land']);
            $table->enum('status', ['For Sale', 'For Rent', 'Sold']);
            $table->integer('bedrooms');
            $table->integer('bathrooms'); 
            $table->integer('area'); // sqft
            $table->string('address');
            $table->string('city'); 
            $table->string('state');
            $table->string('zipcode');
            $table->string('image')->nullable();
            $table->foreignId('agent_id')->constrained('users')->onDelete('cascade');
            $table->boolean('is_featured')->default(false);
            $table->integer('views')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};

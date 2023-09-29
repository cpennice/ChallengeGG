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
        Schema::create('to_do_tasks', function (Blueprint $table) {

            $table->id()->autoIncrement();
            $table->string('name');
            $table->string('description')->nullable();
            $table->boolean('completed')->nullable();

            $table->foreignId('user_id')->references('id')->on('users')->nullable();

            $table->rememberToken()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('to_do_tasks');
    }
};

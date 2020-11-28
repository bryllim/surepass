<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndividualsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('individuals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('age');
            $table->bigInteger('phonenumber');
            $table->unsignedBigInteger('origin_region');
            $table->foreign('origin_region')->references('id')->on('regions');
            $table->unsignedBigInteger('origin_city_province');
            $table->foreign('origin_city_province')->references('id')->on('city_province');
            $table->unsignedBigInteger('origin_baranggay');
            $table->foreign('origin_baranggay')->references('id')->on('baranggays');
            $table->unsignedBigInteger('destination_region');
            $table->foreign('destination_region')->references('id')->on('regions');
            $table->unsignedBigInteger('destination_city_province');
            $table->foreign('destination_city_province')->references('id')->on('city_province');
            $table->unsignedBigInteger('destination_baranggay');
            $table->foreign('destination_baranggay')->references('id')->on('baranggays');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('individuals');
    }
}

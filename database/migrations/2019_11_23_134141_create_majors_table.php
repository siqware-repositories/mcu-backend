<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMajorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('majors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('a_o_c_id')->unsigned();
            $table->string('major');
            $table->longText('content')->default('content');
            $table->longText('curriculum')->default('content');
            $table->longText('schedule')->default('content');
            $table->foreign('a_o_c_id')->references('id')->on('a_o_c_s')->onDelete('cascade');
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
        Schema::dropIfExists('majors');
    }
}

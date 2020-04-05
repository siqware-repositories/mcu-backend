<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUrlToCollaborations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('collaborations', function (Blueprint $table) {
            $table->string('url')->nullable()->default('http://www.mcu.edu.kh/');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('collaborations', function (Blueprint $table) {
            $table->dropColumn('url');
        });
    }
}

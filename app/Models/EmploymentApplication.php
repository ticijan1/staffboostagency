<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmploymentApplication extends Model
{
    use HasFactory;

    protected $table = 'employment_applications';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'country_of_residence',
        'desired_position_or_field',
        'message',
    ];
}

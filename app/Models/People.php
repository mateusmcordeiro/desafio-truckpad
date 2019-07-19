<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Relations\HasManyDocument;
use App\Models\Relations\HasManyAddress;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Relations\HasManyPhone;

class People extends Model
{
    use HasManyDocument,
        HasManyAddress,
        HasManyPhone,
        SoftDeletes;

    protected $dates = [
        'birth_date',
        'deleted_at'
    ];

    protected $fillable = [
        'name',
        'birth_date'
    ];
}

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;

Route::get('/', [LandingController::class, 'index']);
Route::post('/contact', [LandingController::class, 'sendContact']);
Route::post('/employment', [LandingController::class, 'sendEmployment']);
Route::post('/subscribe', [LandingController::class, 'subscribe'])->name('subscribe');
Route::get('/sitemap.xml', function () {
    $lastmod = now()->toAtomString();

    return response()->view('sitemap', compact('lastmod'))
        ->header('Content-Type', 'application/xml');
});
Route::get('/zohoverify/verifyforzoho.html', function () {
    return '68425475';
});

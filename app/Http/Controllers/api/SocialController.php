<?php

namespace App\Http\Controllers\api;

use App\Social;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SocialController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $social = Social::create([
            'name' => request('name'),
            'url' => request('url')
        ]);

        if ($request->is('api/*')) {
            return response()->json($social);
        }
    }
}

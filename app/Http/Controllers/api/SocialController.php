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
        $social = null;

        if (Social::count() > 0) {
            Social::firstOrFail()
                ->update([
                    'twitter' => request('twitter'),
                    'facebook' => request('facebook'),
                    'instagram' => request('instagram'),
                    'email' => request('email')
                ]);

            $social = Social::get();
        } else {
            $social = Social::create([
                'twitter' => request('twitter'),
                'facebook' => request('facebook'),
                'instagram' => request('instagram'),
                'email' => request('email')
            ]);
        }


        if ($request->is('api/*')) {
            return response()->json($social);
        }
    }
}

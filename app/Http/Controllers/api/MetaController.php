<?php

namespace App\Http\Controllers\api;

use App\Meta;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MetaController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $meta = null;

        if (Meta::count() > 0) {
            Meta::firstOrFail()
                ->update([
                    'name' => request('name'),
                    'title' => request('title'),
                    'description' => request('description'),
                    'keywords' => request('keywords')
                ]);

            $meta = Meta::get();
        } else {
            $meta = Meta::create([
                'name' => request('name'),
                'title' => request('title'),
                'description' => request('description'),
                'keywords' => request('keywords')
            ]);
        }


        if ($request->is('api/*')) {
            return response()->json($meta);
        }
    }
}


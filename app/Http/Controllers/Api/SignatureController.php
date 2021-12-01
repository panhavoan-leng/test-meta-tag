<?php

namespace App\Http\Controllers\Api;

use App\Signature;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\SignatureResource;

class SignatureController extends Controller
{
    /**
      * Return a paginated list of signatures.
      *
      * @return SignatureResource
      */
    public function index()
    {
        return [1, 2, 3];
    }

    /**
     * Fetch and return the signature.
     *
     * @param Signature $signature
     * @return SignatureResource
     */
    public function show()
    {

    }

    /**
     * Validate and save a new signature to the database.
     *
     * @param Request $request
     * @return SignatureResource
     */
    public function store(Request $request)
    {
        
    }
}
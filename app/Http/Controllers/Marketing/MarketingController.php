<?php namespace App\Http\Controllers\Marketing;


use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MarketingController extends Controller
{
    public function index()
    {

    	return view('marketing.pages.index');
    }
}

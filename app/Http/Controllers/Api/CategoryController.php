<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\categoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //get all categories
    public function index(){

        $categories = Category::all();

        return response()->json([
            'status_code' => 200,
            'message' => 'Categories were retrieved successfully.',
            'data' => new categoryResource($categories)
        ]);
    }
    //get category courses
    public function show(Category $category){

        $category->load('courses');

        return response()->json([
            'status_code' => 200,
            'message' => 'Categories were retrieved successfully.',
            'data' => new categoryResource($category)
        ]);
    }

}

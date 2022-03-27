<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserCourseRequest;
use App\Http\Resources\Course\courseDetailResource;
use App\Http\Resources\UserCourse\userCourseResource;
use Illuminate\Http\Request;

class UserCourseController extends Controller
{
    public function store(StoreUserCourseRequest $request){

        $data = auth()->user()->courses()->sync($request->course_id);

        return response()->json([
            'status_code' => 200,
            'message' => 'Course was added successfully to user course list.',
            'data' =>  ['course_id' => $request->course_id,]
        ]);
    }

}

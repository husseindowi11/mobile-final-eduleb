<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCourseRequest;
use App\Http\Resources\Course\courseDetailResource;
use App\Http\Resources\UserCourse\userCourseResource;
use App\Models\Course;
use Illuminate\Http\Request;

class UserCourseController extends Controller
{

    //store course to user course list
    public function index(){

        $data = auth()->user()->courses;

        return response()->json([
            'status_code' => 200,
            'message' => 'Course was added successfully to user course list.',
            'data' =>  userCourseResource::collection($data)
        ]);
    }

    //store course to user course list
    public function store(UserCourseRequest $request){

        $data = auth()->user()->courses()->syncWithoutDetaching($request->course_id);

        return response()->json([
            'status_code' => 200,
            'message' => 'Course was added successfully to user course list.',
            'data' =>  ['course_id' => $request->course_id,]
        ]);
    }

    //remove course to user course list
    public function destroy($course_id){

        $data = auth()->user()->courses()->detach($course_id);

        return response()->json([
            'status_code' => 200,
            'message' => 'Course was removed successfully from user course list.',
            'data' =>  ['course_id' => $course_id,]
        ]);
    }

}

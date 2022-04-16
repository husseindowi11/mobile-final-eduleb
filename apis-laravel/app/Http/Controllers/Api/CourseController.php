<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Course\courseDetailResource;
use App\Models\Course;
use App\Models\CourseVideo;
use Illuminate\Http\Request;

class CourseController extends Controller
{

    //get course details
    public function show(Course $course){

        $course->load('course_videos', 'category');

        return response()->json([
            'status_code' => 200,
            'message' => 'Course details were retrieved successfully.',
            'data' => new courseDetailResource($course) ,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Course\courseDetailResource;
use App\Http\Resources\UserCourse\userCourseResource;
use App\Models\Category;
use App\Models\Course;
use App\Models\CourseVideo;
use Illuminate\Http\Request;

class CourseController extends Controller
{

    public function index(){
        $categories = Category::with('courses')->get();

            return response()->json([
                'status_code' => 200,
                'message' => 'Course details were retrieved successfully.',
                'data' =>  new userCourseResource($categories) ,
            ]);
    }

    //get course details
    public function show(Course $course){

        $course->load('course_videos', 'category');
        $check = auth()->user()->courses()->where('course_id', $course->id)->count();
        $course->in_course_list = $check > 0 ? 1 : 0;

        return response()->json([
            'status_code' => 200,
            'message' => 'Course details were retrieved successfully.',
            'data' => new courseDetailResource($course) ,
        ]);
    }
}

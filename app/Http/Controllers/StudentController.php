<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class StudentController extends Controller
{
    public function index()
    {

        $students = Student::with(['class', 'section'])->get();

        return Inertia::render('students/index', [
            'students' => StudentResource::collection($students)
        ]);
    }
}

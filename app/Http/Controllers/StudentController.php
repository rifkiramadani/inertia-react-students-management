<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use Inertia\Inertia;
use App\Models\Classes;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Resources\ClassResource;
use App\Http\Resources\StudentResource;

class StudentController extends Controller
{
    public function index()
    {

        $students = Student::with(['class', 'section'])->paginate(10);

        return Inertia::render('students/index', [
            'students' => StudentResource::collection($students)
        ]);
    }

    public function create()
    {
        $classes = ClassResource::collection(Classes::all());
        return Inertia::render('students/create', [
            'classes' => $classes
        ]);
    }

    public function store(StoreStudentRequest $request)
    {
        Student::create($request->validate());

        return redirect('students.index')->with('success', 'Student has been added.');
    }
}

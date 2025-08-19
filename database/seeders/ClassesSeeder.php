<?php

namespace Database\Seeders;

use App\Models\Classes;
use App\Models\Section;
use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ClassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Buat 10 entri untuk model Classes
        Classes::factory()
            ->count(10)

            // 2. Terapkan nama berurutan untuk setiap Class
            ->sequence(fn(Sequence $sequence) => ['name' => "Class " . ($sequence->index + 1)])

            // 3. Kaitkan 2 Section dengan setiap Class
            ->has(
                Section::factory()
                    ->count(2)

                    // 4. Terapkan nama berurutan (A dan B) untuk setiap Section
                    ->state(
                        new Sequence(
                            ["name" => "Section A"],
                            ["name" => "Section B"]
                        )
                    )

                    // 5. Kaitkan 5 Student dengan setiap Section yang dibuat
                    ->has(
                        Student::factory()
                            ->count(5)

                            // 6. Isi class_id untuk setiap Student secara manual
                            ->state(function (array $attributes, Section $section) {
                                return ['class_id' => $section->class_id];
                            })
                    )
            )

            // 7. Jalankan perintah untuk membuat semua data di database
            ->create();
    }
}

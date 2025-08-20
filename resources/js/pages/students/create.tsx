import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ClassesProps } from '@/types/models/classes';
import { StudentsForm } from './_components/students-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Students',
        href: route('students.index'),
    },
];

export default function create({ classes }: ClassesProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Students" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <StudentsForm classes={classes} />
            </div>
        </AppLayout>
    );
}

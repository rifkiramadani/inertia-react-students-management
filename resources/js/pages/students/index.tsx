import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { StudentsTable, columns } from './_components/students-table';
import { StudentsPaginated } from '@/types/models/students';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Students',
        href: route('students.index'),
    },
];

export default function index({ students }: StudentsPaginated) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <Link href={route('students.index')}>
                    <Button>
                        <Plus />
                        Tambah
                    </Button>
                </Link>
                <StudentsTable data={students.data} columns={columns} />
            </div>
        </AppLayout>
    );
}

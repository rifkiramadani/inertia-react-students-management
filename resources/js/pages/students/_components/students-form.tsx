import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ClassesProps } from "@/types/models/classes"
import { SectionsProps } from "@/types/models/sections"
import { useForm } from "@inertiajs/react"
import { FormEvent, useEffect, useState } from "react"
import axios from "axios"




export function StudentsForm({ classes }: ClassesProps) {

    const [sections, setSections] = useState<SectionsProps['sections']['data']>([]);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        class_id: '',
        section_id: ''
    })

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post(route('students.store'));
    }

    useEffect(() => {
        if (data.class_id) {
            axios.get(route('sections.index', {
                'class_id': data.class_id
            }))
                .then((response) => {
                    setSections(response.data.data);
                })
        }
    }, [data.class_id])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <Input type="text" id="name" name="name" value={data.name} placeholder="Name" onChange={e => setData('name', e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <Input type="text" id="email" name="email" value={data.email} placeholder="Email" onChange={e => setData('email', e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="class">Class</label>
                    <Select name="class" onValueChange={(value) => setData('class_id', value)} value={data.class_id}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Class" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes.data.map((classItem) => (
                                <SelectItem key={classItem.id} value={classItem.id.toString()}>
                                    {classItem.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="mb-3">
                    <label htmlFor="section">Section</label>
                    <Select name="section" onValueChange={(value) => setData('section_id', value)} value={data.section_id}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Section" />
                        </SelectTrigger>
                        <SelectContent>
                            {sections.map((sectionItem) => (
                                <SelectItem key={sectionItem.id} value={sectionItem.name.toString()}>
                                    {sectionItem.name} | {sectionItem.class_id}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" disabled={processing}>Tambah</Button>
            </form>
        </div>
    )
}

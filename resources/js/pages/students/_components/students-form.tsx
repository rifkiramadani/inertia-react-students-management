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

export function StudentsForm({ classes }: ClassesProps) {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <Input type="text" id="name" name="name" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <Input type="text" id="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="class">Class</label>
                    <Select name="class">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Class" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes.data.map((classItem) => (
                                <SelectItem key={classItem.id} value={classItem.name}>
                                    {classItem.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="mb-3">
                    <label htmlFor="section">Section</label>
                    <Select name="section">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Section" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes.data.map((classItem) => (
                                <SelectItem key={classItem.id} value={classItem.name}>
                                    {classItem.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit">Tambah</Button>
            </form>
        </div>
    )
}

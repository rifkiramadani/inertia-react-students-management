export type Section = {
    id: string | number,
    class_id: number,
    name: string
}

export type SectionsProps = {
    sections: {
        data: Section[]
    }
}

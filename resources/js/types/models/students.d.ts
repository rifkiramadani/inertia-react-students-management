export type Students = {
    created_at: date
    id: number
    name: string
    email: string
    class: string,
    section: string
}

export type StudentsPaginated = Paginator<Students>;

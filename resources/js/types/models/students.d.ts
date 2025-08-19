export type Students = {
    id: number
    name: string
    email: string
    class: string,
    section: string
}

export type StudentsPaginated = Paginator<Students>;
